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

    console.log(session)
  }

}

module.exports = SessionsService;
