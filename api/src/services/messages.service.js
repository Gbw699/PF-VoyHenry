const chatsModel = require('../libs/models/chats.model')
const messagesModel = require('../libs/models/messages.model')
const { Op } = require('sequelize');

class MessagesService {

  constructor() {

  }

  async create(body) {

    const [ chat ] = await chatsModel.findOrCreate({
      where: {
        [Op.or]: [
          { firstUser: body.from, secondUser: body.to },
          { firstUser: body.to, secondUser: body.from }
        ]
      },
      defaults: {
        firstUser: body.firstUser,
        secondUser: body.secondUser
      }
    });

    return chat
  }

}

module.exports = MessagesService;
