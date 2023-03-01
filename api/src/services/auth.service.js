const UsersService = require('./user.service')
const MailerService = require('./Mailer.service')
const { CustomError } = require('../middlewares/error.handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const {
  JWT_SECRET
} = process.env

const mailerService = new MailerService()
const userService = new UsersService()

class AuthService {

  async getUser(email, password) {

    const user = await userService.findByEmail(email)

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new CustomError("unauthorized", 401)
    }

    delete user.dataValues.password;

    return user

  }

  signToken(user) {

    user.recoveryToken = null

    const payload = {
      nick: user.nickName,
      role: user.role
    }

    const token = jwt.sign(payload, JWT_SECRET)

    return({
      user,
      token
    })
  }

  async sendRecovery(email) {
    try {
      const user = await userService.findByEmail(email)

      const payload = {
        nick: user.nickName,
      }

      const token = jwt.sign(payload, JWT_SECRET,{expiresIn: '15min'})
      await userService.update( user.nickName, {recoveryToken: token})

      const message = await mailerService.sendRecoveryMail(user, token)

      return message
    } catch (error) {
      throw new CustomError("unauthorized", 401)
    }
  }

  async changePassword(token, newPassword) {

    try {
      const payload = jwt.verify(token, JWT_SECRET)
      const user = await userService.findOne(payload.nick)

      if (user.recoveryToken !== token){
        throw new CustomError("unauthorized", 401)
      }

      await userService.update(user.nickName, {recoveryToken: null, password: newPassword})

      return { message: "password changed"}

    } catch (error) {

      throw new CustomError("unauthorized", 401)
    }

  }

}

module.exports = AuthService;
