const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const blogs = sequelize.define("blogs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },

    title: {
      type: DataTypes.TEXT,
      allowNull: true,


    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    evaluation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 5
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
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,

    },
    stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,

    }
  },
  {
    createdAt: true,
    updatedAt: true,
  })




module.exports = blogs;
