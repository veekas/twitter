const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log(`We good.`);
});

app.get('/', (request, response) => {
  response.send(`\'some message, whatever you want it to be.\' -kyle`)
});
