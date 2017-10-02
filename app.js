const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const portNum = 4231;

app.use(morgan('dev'));

nunjucks.configure('views');
nunjucks.render('index.html', locals, function (err, output) {
  if (err) return console.error(err);
  console.log(output);
})

app.use('/special/', function (req, res, next) {
  res.send('you reached the special area.');
  next();
});

app.get('/', function (req, res) {
  res.send('root route').status(200);
  // res.sendStatus(200, 'root test');
});

app.get('/is-anybody-in-there', function (req, res) {
  res.send('yes, there is someone here... you!');
});

app.get('/modernism', function (req, res) {
  res.send('modernism is modern');
});

app.get('/news', function (req, res) {
  res.json({ name: 'newsRoute', data: 12345 });
});

app.listen(portNum, function () {
  console.log(`listening on ${portNum}`);
});
