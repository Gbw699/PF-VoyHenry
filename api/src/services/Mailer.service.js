const nodemailer = require("nodemailer");
const { CustomError } = require('../middlewares/error.handler')

const {
  MAILER_PASS,
  MAIL
} = process.env

class MailerService {

  constructor() {

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

module.exports = MailerService;
