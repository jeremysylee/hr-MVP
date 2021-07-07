const express = require('express');
const path = require('path');

const app = express();
const port = 3002;
const clientPath = path.join(__dirname, '../src/index.jsx');

app.use('/', express.static(clientPath));
// app.use('/api', router);


app.get(('/play', (res, req) => {
  res.status(200).send('play');
}));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});