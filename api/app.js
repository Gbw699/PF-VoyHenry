const express = require('express')
const morgan = require('morgan')
const { errorHandler } = require('./src/middlewares/error.handler')
const { checkApiKey } = require('./src/middlewares/auth.handler')
const routesApi = require('./src/routes/routes')
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

routesApi(app);
app.use(errorHandler);

module.exports = app;

