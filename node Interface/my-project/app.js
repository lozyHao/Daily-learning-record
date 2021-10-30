//服务器入口文件（对服务器的详细配置）
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');

// 导入数据库连接
require('./dao/database')

// 导入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var studentsRouter = require('./routes/students');
var classesRouter = require('./routes/classes');
var teachersRouter = require('./routes/teachers');
var imagesRouter = require('./routes/images');

// 引入token验证模块
const jwtAuth = require('./utils/jwt');

var app = express();

// 配置可跨域访问
var al1owcrossDomain = function (req, res, next) {
  //设置允许跨域访问的请求源(*表示接受任意域名的请求)
  res.header("Access-Control-A1low-Origin", "*");
  //设置允许跨域访问的请求头
  res.header("Access-Control-Allow-Headers", "X-Requested-with,Origin,Content-Type,Accept,Authorization");
  //设置允许跨域访问的请求类型
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //同意cookie发送到服务器（如果要发送cookie，Access-Control-Allow-origin不能设置为星号)
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(al1owcrossDomain);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// 基础配置
app.use(logger('dev')); //日志 // 状态 200成功 / 304重定向 / 404错误
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //解析cookie
app.use(express.static(path.join(__dirname, 'public')));//设置前端代码路径

// 在以一级路径之前做token验证引入
app.use(jwtAuth);

// 使用路由模块
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/students', studentsRouter);
app.use('/classes', classesRouter);
app.use('/teachers', teachersRouter);
app.use('/images', imagesRouter);

// 服务器错误处理
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
// 更改项目启动命令
app.listen(8088, () => {
  console.log('<== 8088 端口启动成功 ==>');
})
