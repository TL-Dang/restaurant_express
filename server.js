'use secure';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const reservations = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(3000, () => console.log('http://localhost:3000'));
