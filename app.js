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

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = "ゲスト";
    res.locals.isLoggedIn = false;
  } else {
    res.locals.username = req.session.username;
    res.locals.isLoggedIn = true;
  }
  next();
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

app.get('/signup', (req, res) => {
  res.render('signup.ejs', {errors: []});
});

// app.post('/signup', 
//   (req, res, next) => {
//     console.log('入力値の空チェック');
//     next();
//   },
//   (req, res) => {
//     console.log('ユーザー登録');
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     connection.query(
//       'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
//       [username, email, password],
//       (error, results) => {
//         req.session.userId = results.insertId;
//         req.session.username = username;
//         res.redirect('/');
//       }
//     );
//   }
// );

app.post('/signup', 
  (req, res, next) => {
    console.log('入力値の空チェック');
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const errors = [];
    
    if (username === '') {
      errors.push('ユーザー名が空です');
    }
    if (email === '') {
      errors.push('メールアドレスが空です');
    }
    if (password === '') {
      errors.push('パスワードが空です');
    }
    
    console.log(errors);

    if (errors.length > 0) {
      res.render('signup.ejs', {errors: errors});
    } else {
      next();
    }
  },
  (req, res) => {
    console.log('ユーザー登録');
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password],
      (error, results) => {
        req.session.userId = results.insertId;
        req.session.username = username;
        res.redirect('/list');
      }
    );
  }
);


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
          req.session.userId = results[0].id;
          req.session.username = results[0].username;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
  });
})

app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    res.redirect('/');
  });
});

app.listen(3000);

