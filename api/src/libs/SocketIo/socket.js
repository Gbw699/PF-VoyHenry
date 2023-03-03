const { io } = require('../../../app')

const startSocketIo = () =>{
  io.on('connection', (socket) => {
    console.log("Clientes conectados: ", io.engine.clientsCount)
    /* console.log("id: ", socket.id) */
    socket.on('disconnect', () => {
      console.log("Clientes conectados: ", io.engine.clientsCount)
    });
  });
}

module.exports = startSocketIo;
