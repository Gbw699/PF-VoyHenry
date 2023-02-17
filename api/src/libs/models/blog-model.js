const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const blogs = sequelize.define("blogs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },

    usernickName: {
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
    image: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    },
    userimage: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    },

  },
  {
    createdAt: true,
    updatedAt: true,
  })


module.exports = blogs;
