require('dotenv').config();
const app = require('./app');
const sequelize = require('./src/libs/database/database');
const socketIO = require('socket.io');
const http = require('http');

/* ➖➖🟥🟥🟥
 ➖🟥🟥🟦🟦🟦
 🟥🟥🟥🟦🟦🟦
 🟥🟥🟥🟦🟦🟦
 🟥🟥🟥🟥🟥🟥
 ➖🟥🟥🟥🟥🟥
 ➖🟥🟥➖🟥🟥
 ➖🟥🟥➖🟥🟥 */

const { PORT } = process.env;

async function main() {
  try {
    await sequelize.sync({ force: false, logging: false });
    console.log('Connection has been established successfully.');

    const server = http.createServer(app);
    const io = socketIO(server);

    io.on('connection', (socket) => {
      console.log('A user has connected');
    });

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
