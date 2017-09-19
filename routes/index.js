const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  // console.log(showForm);
  res.render('index', { tweets, showForm: true });
});

router.get('/users/:name', (req, res) => {
  const name = req.params.name;
  const list = tweetBank.find({ name });
  res.render('index', { list, showForm: true });
});

router.get('/users/:name', (req, res) => {
  const name = req.params.name;
  res.render('index', { name });
});

router.get('/tweets/:id', (req, res) => {
  const id = +req.params.id;
  const list = tweetBank.find({ id });
  res.render('index', { list });
});

router.post('/tweets', function (req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
