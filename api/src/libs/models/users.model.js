const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
const plans = require('./plans.model');
const blogs = require('./blog-model')
const comments = require('./comments.users')

const users = sequelize.define('users', {

  nickName: {
    type: DataTypes.STRING(55),
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [['Femenino', 'Masculino', 'No binario', 'Prefiero no decirlo', "Otro"]]
    }
  },
  about: {
    type: DataTypes.STRING(255)
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  firstName: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(55),
  },
  image: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  recoveryToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'customer'
  },
  google: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }


})

users.hasMany(plans);
plans.belongsTo(users);

users.hasMany(blogs);
blogs.belongsTo(users);

users.belongsToMany(plans, { foreignKey:"userNickName", through: 'users_votes_plans' });
plans.belongsToMany(users, { foreignKey:"Planid", through: 'users_votes_plans' });

users.belongsToMany(blogs, { foreignKey:"userNickName", through: 'users_votes_blogs' });
blogs.belongsToMany(users, { foreignKey:"blogid", through: 'users_votes_blogs' });

users.belongsToMany(plans, { foreignKey:"userNickName", through: 'users_comments_plans' });
plans.belongsToMany(users, { foreignKey:"plansid", through: 'users_comments_plans' });

users.belongsToMany(comments, { foreignKey:"userNickName", through: 'comments_users' });
comments.belongsToMany(users, { foreignKey:"commentid", through: 'comments_users' });

comments.belongsToMany(plans, { foreignKey:"commentid", through: 'comments_plans' });
plans.belongsToMany(comments, { foreignKey:"plansid", through: 'comments_plans' });

comments.belongsToMany(blogs, { foreignKey:"commentid", through: 'comments_blogs' });
blogs.belongsToMany(comments, { foreignKey:"blogid", through: 'comments_blogs' });

// users.belongsToMany(comments, {as: "user", foreignKey:"NickName", through: 'users_comments' });
// comments.belongsToMany(users, {as: "commentuser", foreignKey:"userNickName", through: 'users_comments' })
// comments.belongsToMany(plans, {as:"commentplans", foreignKey:"userNickName", through: 'users_comments' })
// plans.belongsToMany(plans, {as:"plans", foreignKey:"planid", through: 'users_comments' });

module.exports = users;