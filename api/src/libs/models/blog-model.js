const { DataTypes } = require('sequelize');
const sequelize = require('../database/database')

const blog = sequelize.define("blog", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },

    userName: {
      type: DataTypes.STRING,
      allowNull: true,


    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,


    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 10
      }
    },

  },
  {
    timestamps: false,
    createdAt: true,
    updatedAt: true,
  })


module.exports = blog;
