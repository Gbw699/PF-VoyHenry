const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

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
    }
  })

module.exports = sessions;
