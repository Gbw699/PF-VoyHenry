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
      defaultValue: 1,

    },
    stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,

    },
    average: {
      type: DataTypes.INTEGER,
      get() {
        if (this.votes === 0) {
          return 0
        } else {
          return this.stars / this.votes
        }
      }
    }
  },
  {
    createdAt: true,
    updatedAt: true,
  })




module.exports = blogs;
