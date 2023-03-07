const { io } = require('../../../app');
const SessionsService = require('../../services/sessions.service');
const sessionsService = new SessionsService()

const startSocketIo = async() =>{
  await sessionsService.resetAllSessions()
  io.on('connection', (socket) => {
    console.log("Clientes conectados: ", io.engine.clientsCount)

    sessionsService.initSession(
      socket.handshake.auth.nickName,
      socket.handshake.auth.completeName,
      socket.id
    )

    socket.on('mensaje', (data) => {
      console.log("From: " + data.from)
      console.log("To: " + data.to)
      console.log("Mensaje: " + data.mensaje)
    })

    socket.on('disconnect', () => {
      console.log("Clientes conectados: ", io.engine.clientsCount)
      sessionsService.finishSession(socket.handshake.auth.nickName, socket.id)
    });
  });
}

module.exports = startSocketIo;
