const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const chats = require('./chats.model')
const users = require('./users.model')

const messages = sequelize.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  chatId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
})

messages.belongsTo(chats, { foreignKey: 'chatId' });
messages.belongsTo(users, { foreignKey: 'from' });
messages.belongsTo(users, { foreignKey: 'to' });

module.exports = messages;
