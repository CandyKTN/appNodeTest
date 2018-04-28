var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'mysqltest',
        database: 'myfirsttest',
        port: '3306'
    });
//进行连接
    conn.connect();

    var username = 'Miss w';
    var course = 'Math';
//以insert写sql语句
    var sql = "select introduce from firsttable;";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            var aaa = {
                "success": true,
                "msg": "成功执行",
                "errorCode": 200,
                data:{
                    "count": 100,
                    "rows":result
                }
            }
            res.send(aaa);
        }
    });
});

module.exports = router;
