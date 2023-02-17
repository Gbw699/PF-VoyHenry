const { CustomError } = require('../../../middlewares/error.handler')
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt')
const UsersService = require('../../../services/user.service')

const service =  new UsersService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  async (email, password, done) => {
    try {

      const user = await service.findByEmail(email)

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        done(new CustomError("unauthorized", 401), false)
      }

      delete user.dataValues.password;

      done(null, user)
    } catch (error) {

      done(error, false)
    }

});

module.exports = LocalStrategy;
