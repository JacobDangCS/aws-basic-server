'use strict';

const express = require('express');

require('dotenv').config();

const PORT = 3002;

const app = express();


app.get('/', (req, res, next) => {
    res.status(200).send('Coming from cloud server');
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});