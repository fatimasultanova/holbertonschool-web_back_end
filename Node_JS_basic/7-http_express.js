const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  const originalLog = console.log;
  console.log = (msg) => {
    responseParts.push(msg);
  };

  countStudents(databaseFile)
    .then(() => {
      console.log = originalLog;
      res.send(responseParts.join('\n'));
    })
    .catch((err) => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
