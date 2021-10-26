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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// 基础配置
app.use(logger('dev')); //日志 // 状态 200成功 / 304重定向 / 404错误
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //解析cookie
app.use(express.static(path.join(__dirname, 'public')));//设置前端代码路径


// 使用路由模块
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/students', studentsRouter);
app.use('/classes', classesRouter);
app.use('/teachers', teachersRouter);




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
