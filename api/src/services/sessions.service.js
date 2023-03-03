const sessionModel = require('../libs/models/sessions.model');

class SessionsService{

  constructor() {

  }

  async initSession(nickName, completeName){

    const session = await sessionModel.findOrCreate({
      where: {
        nickName: nickName,
      },
      defaults: {
        nickName: nickName,
        completeName: completeName,
        numberOfSessions: 1
      }
    })

    this.addOnesession(session)

  }

  async finishSession(nickName){

    const session = await sessionModel.findByPk(nickName)

    if(session.numberOfSessions == 1){
      sessionModel.destroy({
        where: {
          nickName: nickName
        }
      })
    } else {
      this.finishOneSession(session)
    }
  }

  async addOnesession(session){
    if (!session[1]) {
      session[0].numberOfSessions =  session[0].numberOfSessions + 1
      session[0].save()
    }
  }

  async finishOneSession(session){
      session.numberOfSessions =  session.numberOfSessions - 1
      console.log(session)
      session.save()
  }

}



module.exports = SessionsService;
