const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const users = require('./users.model')

const sessions = sequelize.define("sessions", {
  nickName: {
    type: DataTypes.STRING,
    primaryKey: true,
    },
  completeName: {
    type: DataTypes.STRING,
    allowNull: false
    },
  numberOfSessions: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
  sockets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
})

users.hasOne(sessions, { foreignKey: 'nickName' });
sessions.belongsTo(users, { foreignKey: 'nickName' });

module.exports = sessions;
