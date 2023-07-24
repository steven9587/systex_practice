const express = require("express");
const app = express();

const index = require('./routes/index');
const job = require('./routes/job');

app.use('/', index);
app.use('/job', job);

exports.router = app;