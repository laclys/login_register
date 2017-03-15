const express = require('express');
const static = require('express-static');
let server = express();
server.listen(2333);
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4210',
    database: 'login_regi'
});

server.get('/regi', (request, response) => {
    var json = request.query;
    var sql=`SELECT * FROM table_user WHERE user='${json['user']}'`;
    db.query(sql, function (err, data) {
        console.log(err,data);
        if (data.length) {
            response.send({
                state: 1,
                message: '账号已存在'
            });
        } else {
            var sql = `INSERT INTO table_user VALUES ('${json['user']}', '${json['pass']}')`;
            db.query(sql, function (err, data) {
                console.log(data);
            });
            response.send({
                state: 0
            });
        }
    });
});

server.get('/login', (request, response) => {
    var json = request.query;
    var sql = `SELECT * FROM table_user WHERE user='${json['user']}'`
    db.query(sql, function (err, data) {
        if (data.length) {
            if (data[0].pass == json.pass) {
                response.send({
                    state: 0
                });
            }
        } else {
            response.send({
                state: 1,
                message: '用户不存在'
            });
        }
    });
});


//设置静态文件权限
server.use(static('www'));