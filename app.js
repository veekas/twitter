const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const router = require('./routes');

const portNum = 4231;
let locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

app.use(router);

app.use(morgan('dev'));

nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/special/', function (req, res, next) {
  res.send('you reached the special area.');
  next();
});

app.get('/', function (req, res) {
  nunjucks.render('index.html', locals, function (err, output) {
    if (err) return console.error(err);
    res.send(output);
  });
  // res.send('root route').status(200);
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
