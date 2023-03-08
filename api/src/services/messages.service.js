const chatsModel = require('../libs/models/chats.model')
const messagesModel = require('../libs/models/messages.model')
const usersModel = require('../libs/models/users.model')
const { CustomError } = require('../middlewares/error.handler');
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
        firstUser: body.from,
        secondUser: body.to
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

  async findUserChats(nickName){

    const chats = await chatsModel.findAll({
      where: {
        [Op.or]: [
          { firstUser: nickName},
          { secondUser: nickName}
        ]
      }
    })

    if(chats.length === 0){
      throw new CustomError('Chats not found', 404);
    }

    const chatWithUserData = await this.addUserData(chats)
    const chatsWithLastMessage = await this.addLastMessage(chatWithUserData)

    return chatsWithLastMessage
  }

  async findConversation(chatId){
    const conversation = await messagesModel.findAll({
      where: {
        chatId: chatId
      }
    })


    if(conversation.length === 0){
      throw new CustomError('conversation not found', 404);
    }

    const conversationWithUserData = await this.addUserData(conversation)

    return conversationWithUserData
  }

  async addUserData(chats){
    const chatWithUserData = await Promise.all(chats.map(async chat => {
      const usersInfo = await usersModel.findAll({
        where: {
          [Op.or]: [
            { nickName: chat.firstUser || chat.from },
            { nickName: chat.secondUser || chat.to}
          ]
        },
        attributes: [
          "nickName",
          "firstName",
          "lastName",
          "image"
        ]
      });
      return {
        chat,
        usersInfo
      };
    }));

    return chatWithUserData
  }

  async addLastMessage(chats){
    const chatWithLastMessage =Promise.all(chats.map(async chat => {
      const lastMessage = await messagesModel.findOne({
        where: {
          chatId: chat.chat.id
        },
        order: [['createdAt', 'DESC']],
        limit: 1,
        attributes: [
          "from",
          "to",
          "message"
        ]
      });
      chat.lastMessage = lastMessage
      return chat
    }));
    return chatWithLastMessage
  }

}

module.exports = MessagesService;
