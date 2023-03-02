const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const comments = sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

    },

  content: {
      type: DataTypes.TEXT,
      allowNull: true,

    },

  // userNickName: {
  //   type: DataTypes.TEXT,
  //   allowNull: true,
  //   },

  // Planid: {
  //   type: DataTypes.TEXT,
  //   allowNull: true,
  // },
  votes:{
    type: DataTypes.TEXT,
    defaultValue: 0,
  },
  stars: {
    type: DataTypes.TEXT,
    defaultValue: 0,
  }
},
  {
    createdAt: true,
    updatedAt: true,
  })




module.exports = comments;