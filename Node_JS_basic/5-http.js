const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];

    const originalLog = console.log;
    console.log = (msg) => {
      responseParts.push(msg);
    };

    countStudents(databaseFile)
      .then(() => {
        console.log = originalLog;
        res.end(responseParts.join('\n'));
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
