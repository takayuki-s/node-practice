const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'npra'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      res.render('hello.ejs', {users: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.userName],
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
      res.render('edit.ejs', {user: results[0]});
    }
    );
});

app.post('/update/:id', (req, res) => {
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.userName, req.params.id],
    (error, results) => {
      res.redirect('/')
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
})

app.post('/login', (req, res) => {
  res.redirect('/list');
})

app.listen(3000);

