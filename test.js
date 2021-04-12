// requireの設定
const mysql = require('mysql');

// MySQLとのコネクションの作成
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database: 'npra'
});

// 接続
connection.connect();

// userの取得
connection.query('SELECT * from npra;', function (err, rows, fields) {
	if (err) { console.log('err: ' + err); } 

	console.log('name: ' + rows[0].name);
	console.log('id: ' + rows[0].id);

});

// userのカラムを取得
connection.query('SHOW COLUMNS FROM npra;', function (err, rows, fields) {
	if (err) { console.log('err: ' + err); }

	console.log(rows[0].Field);
	console.log(rows[1].Field);
});

// 接続終了
connection.end();