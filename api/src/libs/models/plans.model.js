const { DataTypes } = require('sequelize')
const sequelize = require('../database/database');
const users = require('./users.model');


const plans = sequelize.define('plans', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  summary: {
    type: DataTypes.STRING(125),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  mainImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  images : {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  eventDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(25),
    allowNull: false,
    validate: {
      isIn: [['En planeacion', 'En progreso',  'Finalizado']]
    }
  }

})

/* plans.belongsTo(users, { through: 'plansByUser', foreignKey: 'id' }); */

module.exports = plans;
