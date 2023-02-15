const { DataTypes } = require('sequelize');
const sequelize = require('../database/database')

const blog = sequelize.define("blog", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },

    username: {
      type: DataTypes.STRING,
      allowNull: true,
      //primaryKey: true,

    },
    titulo: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: true,

    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,

    },

  },
  {
    timestamps: false,
    createdAt: true,
    updatedAt: true,
  })


module.exports = blog;
