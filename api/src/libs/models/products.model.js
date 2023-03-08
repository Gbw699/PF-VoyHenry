const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Remeras', 'Pantalones', 'Gorros']],
    },
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  mainImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
    get() {
      const stockValue = this.getDataValue('stock');
      return stockValue < 0 ? 0 : stockValue;
    },
  },
  availability: {
    type: DataTypes.BOOLEAN,
    get() {
      if (this.stock <= 0) {
        return false;
      } else {
        return this.getDataValue('availability')
      }
    },
  },
});

module.exports = products;
