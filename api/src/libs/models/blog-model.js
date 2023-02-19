const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const users = require('./users.model');

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

  users.hasMany(blogs);
  blogs.belongsTo(users);


module.exports = blogs;
