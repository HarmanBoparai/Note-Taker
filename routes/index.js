
const express = require('express');

//Import modular router for /notes
const notes = require('./notes');

//Import diagnostics route

const app = express();
app.use('/notes',notes);

//Initialize diagnostics route
module.exports = app;





