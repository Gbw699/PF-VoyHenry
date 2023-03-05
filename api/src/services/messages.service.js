const chatsModel = require('../libs/models/chats.model')
const messagesModel = require('../libs/models/messages.model')
const { Op } = require('sequelize');

class MessagesService {

  constructor() {

  }

  async create(body) {

    const chat = await this.createOrFindChat(body)
    await this.sendMessage(chat.id, body)

    return chat
  }

  async createOrFindChat(body){
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

  async sendMessage(chatId, body){
    await messagesModel.create({
      chatId: chatId,
      from: body.from,
      to: body.to,
      message: body.message
    })
  }

}

module.exports = MessagesService;
