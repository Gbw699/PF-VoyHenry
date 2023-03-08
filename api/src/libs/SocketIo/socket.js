const { io } = require('../../../app');
const SessionsService = require('../../services/sessions.service');
const MessagesService = require('../../services/messages.service')

const sessionsService = new SessionsService()
const messagesService = new MessagesService()

const startSocketIo = async() =>{
  await sessionsService.resetAllSessions()
  io.on('connection', (socket) => {
    console.log("Clientes conectados: ", io.engine.clientsCount)

    sessionsService.initSession(
      socket.handshake.auth.nickName,
      socket.handshake.auth.completeName,
      socket.id
    )

    socket.on('mensaje', async (data) => {
      await messagesService.create({
        to: data.to,
        from: data.from,
        message: data.message
      })

      let firstUserSession = await sessionsService.findOne(data.to)
      let secondUserSessions = await sessionsService.findOne(data.from)

      if (firstUserSession) {
        const firstUserSockets = firstUserSession.dataValues.sockets
        firstUserSockets.forEach(socket => {
          io.to(socket).emit('newMessage', "Tienes un nuevo mensaje " + socket)
        });
      }

      if (secondUserSessions) {
        const secondUserSockets = secondUserSessions.dataValues.sockets
        secondUserSockets.forEach(socket => {
          io.to(socket).emit('newMessage', "Tienes un nuevo mensaje " + socket)
        });
      }

    })

    socket.on('disconnect', () => {
      console.log("Clientes conectados: ", io.engine.clientsCount)
      sessionsService.finishSession(socket.handshake.auth.nickName, socket.id)
    });
  });
}

module.exports = startSocketIo;
