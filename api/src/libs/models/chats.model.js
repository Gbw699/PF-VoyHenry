const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const users = require('./users.model')


const chats = sequelize.define("chats", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },
  firstUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  secondUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

chats.belongsTo(users, { foreignKey: 'firstUser' });
chats.belongsTo(users, { foreignKey: 'secondUser' });

module.exports = chats;
