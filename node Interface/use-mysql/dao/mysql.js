var db    = {};
var mysql = require('mysql');
// 创建连接池
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'lzh990821',
  database        : 'lmblog'
});
 
db.query = function(sql, callback){
	if (!sql) {
		callback();
		return;
	}
	pool.query(sql, function(err, rows, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
	  callback(null, rows, fields);
	});
}
module.exports = db;