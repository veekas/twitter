module.exports = {
  add: add,
  list: list,
  find: find
};

const _ = require('lodash');
let id = 2;
const data = [
  {
    name: 'Barack Obama',
    content: 'Fullstack Academy fulfills the promise of the American Dream for its students.',
    id: 0
  },
  {
    name: 'Donald J Trump',
    content: 'Believe me. Fullstack Academy is fantastic. Bigly. The lying New York Times doesn\'t report it. #makeamericacodeagain',
    id: 1
  }
];

const getFakeID = function () {
  return id++;
};

function add(name, content) {
  data.push({ name, content, id: getFakeID() });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

const randArrayEl = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function () {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Kyle', 'Veekas', 'Rihanna', 'Kanye', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma', 'Uehlein', 'Shrivastava', 'West'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function () {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive', 'vivacious', 'confused', 'arrogant'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #longhairdontcare";
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet(), getFakeID());
}
