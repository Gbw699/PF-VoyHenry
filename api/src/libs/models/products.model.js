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
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Remeras', 'Pantalones',  'Gorros']]
    }
  },
  detail: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  images : {
  type: DataTypes.ARRAY(DataTypes.TEXT),
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
