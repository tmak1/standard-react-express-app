const path = require('path');
const express = require('express');
const doit = require('./lib.js');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', (req, res) => {
  doit();
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen({ port: PORT }, (err) => {
  if (!err) {
    console.log(`Listening: http://localhost:${PORT}`);
  }
});
