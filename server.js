const express = require('express');
const app = express();
const contributions = require('./routes/contributions');

app.use('/api/contributions', contributions);

module.exports = app;
