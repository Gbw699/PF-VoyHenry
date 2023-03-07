const sessionModel = require('../libs/models/sessions.model');

class SessionsService{

  constructor() {

  }

  /* Find all sessions */

  async find(){
    const allSessions = sessionModel.findAll()

    return allSessions
  }

  async initSession(nickName, completeName, socketId){

    const session = await sessionModel.findOrCreate({
      where: {
        nickName: nickName,
      },
      defaults: {
        nickName: nickName,
        completeName: completeName,
        numberOfSessions: 1,
        sockets: [socketId]
      }
    })

    this.addOnesession(session, socketId)

  }

  async findOne(nickName){
    const session = await sessionModel.findOne({
      where: {
        nickName: nickName
      }
    })

    return session
  }

  async finishSession(nickName, socketId){

    const session = await sessionModel.findByPk(nickName)

    if(session.numberOfSessions == 1){
      sessionModel.destroy({
        where: {
          nickName: nickName
        }
      })
    } else {
      this.finishOneSession(session, socketId)
    }
  }

  async addOnesession(session, socketId) {
    if (!session[1]) {
      session[0].numberOfSessions = await session[0].numberOfSessions + 1
      const newArraySocket = session[0].sockets.slice()
      newArraySocket.push(socketId)
      session[0].sockets = newArraySocket
      await session[0].save()
    }
  }

  async finishOneSession(session, socketId){
      session.numberOfSessions = await session.numberOfSessions - 1
      session.sockets = session.sockets.filter(element => {
        return (element !== socketId)
      });
      await session.save()
  }

  async resetAllSessions(){
    await sessionModel.destroy({
      where: {}
    })
  }

}



module.exports = SessionsService;
