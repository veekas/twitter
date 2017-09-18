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

// const tolkeinRowlingUniverse = {
//   title: 'An Example',
//   people: [
//     { name: 'Gandalf' },
//     { name: 'Frodo' },
//     { name: 'Hermione' }
//   ]
// };

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', tolkeinRowlingUniverse, (err, output) => {
//   if (err) console.log('There was an error in the nunjucks.render');
//   console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
app.render('index', { title: 'Hall of Fame', people: people });

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
