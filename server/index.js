const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));
// app.use('/api', router);

app.get('/lol', (req, res) => {
  res.status(200).send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
