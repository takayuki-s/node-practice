const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'npra'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
)

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('hello.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      connection.query(
        'SELECT * FROM items',
        (error, results) => {
          res.redirect('/')
        }
      );  
    }
  );
});

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, result) => {
      res.redirect('/');
    });
});

app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', {item: results[0]});
    }
    );
});

app.post('/update/:id', (req, res) => {
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
      res.redirect('/')
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
})

app.post('/login', (req, res) => {
  const email = req.body.email;

  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        if (req.body.password === results[0].password) {
          console.log("認証に成功しました");
          res.redirect('/');
        } else {
          console.log("passwordが違います");
          res.redirect('/login');
        }
      } else {
        console.log("認証に失敗しました");
        res.redirect('/login');
      }
  });
})

app.listen(3000);

