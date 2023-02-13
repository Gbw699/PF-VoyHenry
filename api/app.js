const express = require('express')
const morgan = require('morgan')
const routesApi = require('./src/routes/routes')
const app = express();

app.use(express.json());
app.use(morgan('dev'));
routesApi(app);

module.exports = app;

