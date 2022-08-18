'use secure';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const reservations = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(process.env.PORT || port, () =>
  console.log(`reservation app listening at http://localhost:${port}`)
);
