// 模拟生产路径
var express = require('express');
var app = express();
app.use('/aa/bb/',express.static('dist'));
app.listen(3000, function () {
  console.log('server started at listening on: localhost:3000/aa/bb/index.html#/,please enter ctrl^c exit');
});