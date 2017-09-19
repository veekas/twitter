// set up
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

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

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

const people = {
  title: 'Fullstack Example',
  people: [
    { name: 'Full' },
    { name: 'Stacker' },
    { name: 'Son' }]
};

app.get('/', (request, res, next) => {
  res.render('index.html', people);
});

app.get('/news', (request, res) => {
  res.send(`'breaking: the world is ending' -reporting from the world, kyle`);
});
