const express = require('express');
const config = require('./config.js');

const app = express();

app.use(express.static('public'));

app.listen(config.port, function listenHandler() {
  console.log('Running on port ${config.port}');
})
