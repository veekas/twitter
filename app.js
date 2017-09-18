// set up
const express = require('express');
const app = express();

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

app.use((request, response, next) => {
  console.log(chalk.green(`'throw some text in there, we'll see what happens' -kyle`));
  next();
});

app.get('/', (request, response) => {
  response.send(`'some message, whatever you want it to be.' -kyle`);
});

app.get('/news', (request, response) => {
  response.send(`'breaking: the world is ending' -reporting from the world, kyle`);
});
