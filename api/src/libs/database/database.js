require('dotenv').config();
const Sequelize = require('sequelize')

const {
  DB_URL
} = process.env

const sequelize = new Sequelize(DB_URL)

module.exports = sequelize;
