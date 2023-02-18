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

  async sendMail(email) {

    try {
      const user = await userService.findByEmail(email)

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        port: 465,
        auth: {
            user: MAIL,
            pass: MAILER_PASS
        },
      });

      await transporter.sendMail({
        from: MAIL, // sender address
        to: user.email, // list of receivers
        subject: "recovery prueb", // Subject line
        text: "Soy el texto de una prueba", // plain text body
        html: "<b>Sos el lien?</b>", // html body
      });

      return { message: 'Mail sent'}

    } catch (error) {
      throw new CustomError("unauthorized", 401)
    }

  }

}

module.exports = AuthService;
