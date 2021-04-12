var MysqlClient = require('mysql').MysqlClient,
  settings = require('./settings');
MysqlClient.connect("mysql://"+settings.host+"/"+settings.db, function(err, db) {
  if (err) { return console.dir(err); }
  console.log("connected  to db");
});