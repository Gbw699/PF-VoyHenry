const express = require('express');
const morgan = require('morgan');
const http = require('http');
const socketIo = require('socket.io');
const { errorHandler } = require('./src/middlewares/error.handler');
const routesApi = require('./src/routes/routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'https://pf-voy-henry.vercel.app/',
    methods: ['GET', 'POST']
  }
});

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://pf-voy-henry.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

require('./src/utils/auth');

routesApi(app);
app.use(errorHandler);

module.exports = {
  server,
  io
};

