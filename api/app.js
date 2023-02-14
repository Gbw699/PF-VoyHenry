const express = require('express')
const morgan = require('morgan')
const {errorHandler } = require('./src/middlewares/error.handler')
const routesApi = require('./src/routes/routes')
const app = express();

app.use(express.json());
app.use(morgan('dev'));
routesApi(app);
app.use(errorHandler);

module.exports = app;

