const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));
// app.use('/api', router);

let loling = false;

app.get('/lol', (req, res) => {
  res.status(200).send(loling);
});

app.get('/lolol', (req, res) => {
  loling = !loling;
  if (loling === false) {
    res.status(200).send('not laughing');
  } else {
    res.status(200).send('laughing');
  }
});

setInterval(() => {
  loling = false;
}, 10000);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
