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
    allowNull: false,
    validate: {
      isIn: [['Femenino', 'Masculino', 'No binario', 'Prefiero no decirlo', "Otro"]]
    }
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
  },
  image: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true
    }
  }

})

module.exports = users;
