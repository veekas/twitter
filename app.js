// set up
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const routes = require('./routes');
app.use('/', routes);

// logs and prettification
const volleyball = require('volleyball');
app.use(volleyball);
// installed morgan to check it out, but we like volleyball while we're learning
// var morgan = require('morgan');
// app.use(morgan);
const chalk = require('chalk');

app.listen(3000, function () {
  console.log(`We good.`);
});

app.use(express.static('public'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.post('/tweets', (req, res) => {
  res.send(tweetBank.add('Fake Person', 'Fake tweet. #fakehashtag'));
});

app.get('/tweets', (req, res) => {
  res.send(tweetBank.list());
});
