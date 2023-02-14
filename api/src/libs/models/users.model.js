const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const users = sequelize.define('users', {

  nickName: {
    type: DataTypes.STRING(15),
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  about: {
    type: DataTypes.STRING(255)
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(55),
  }

})

module.exports = users;