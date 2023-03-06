require('dotenv').config();
const { server} = require('./app');
const startSocketIo = require('./src/libs/SocketIo/socket')
const sequelize = require('./src/libs/database/database');

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
     /* Database */
    await sequelize.sync({ force: false, logging: false });
    console.log('Connection has been established successfully.');

    /* Socket.io */
    startSocketIo()

    /* Express server */
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
