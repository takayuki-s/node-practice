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
      console.log(results);
      res.render('hello.ejs', {users: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO users (name) VALUES (?)',
    [req.body.userName],
    (error, results) => {
      connection.query(
        'SELECT * FROM users',
        (error, results) => {
          res.redirect('/')
        }
      );  
    }
  );
});

app.post('/delete/:id', (req, res) => {
  console.log(req.params.id);
  res.redirect('/');
});


app.listen(3000);

