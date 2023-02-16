const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const products = sequelize.define('products', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  detail: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  mainImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  availability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }

})

module.exports = products;
