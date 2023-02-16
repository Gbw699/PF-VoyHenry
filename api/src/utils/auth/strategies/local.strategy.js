const { Strategy } = require('passport-local');
const UsersService = require('../../../services/user.service')

const service =  new UsersService();

const LocalStrategy = new Strategy((email, password, done) => {

});

module.exports = LocalStrategy;
