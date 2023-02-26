const UsersService = require('./user.service')
const { CustomError } = require('../middlewares/error.handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const nodemailer = require("nodemailer");

const {
  JWT_SECRET,
  MAILER_PASS,
  MAIL
} = process.env

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
      const link = `https://pf-voy-henry.vercel.app/changePass?token=${token}`;
      await userService.update( user.nickName, {recoveryToken: token})

      const mail = {
        from: MAIL,
        to: user.email,
        subject: "Recuperación de contraseña.",
        html:`<b>Haz click en el siguiente Link para recuperar la contraseña: ${link}</b>`,
      }

      const message = await this.sendMail(mail)

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

  async sendMail(infoEmail) {

    try {

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        port: 465,
        auth: {
            user: MAIL,
            pass: MAILER_PASS
        },
      });

      await transporter.sendMail(infoEmail);

      return { message: 'Mail sent'}

    } catch (error) {
      throw new CustomError("unauthorized", 401)
    }

  }

}

module.exports = AuthService;
