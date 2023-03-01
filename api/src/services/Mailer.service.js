const nodemailer = require("nodemailer");

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
      return(error)
    }

  }

  async sendRecoveryMail(user, token) {

    const link = `http://localhost:3000/changePass?token=${token}`;

    const mail = {
      from: MAIL,
      to: user.email,
      subject: "Recuperación de contraseña.",
      html:`<b>Haz click en el siguiente Link para recuperar la contraseña: ${link}</b>`,
    }

    const message = await this.sendMail(mail)

    return message

  }

  sendWelcomeMail(user){

    const mail = {
      from: MAIL,
      to: user.email,
      subject: `¡Bienvenido/a a voyHenry, ${user.firstName}!`,
      html: `
        <h2>Hola ${user.firstName},</h2>
        <h3>¡Bienvenido/a a voyHenry! Nos alegra que hayas decidido unirte a nuestra comunidad.</h3>
        <p>En voyHenry podrás encontrar o hacer planes de viajes entre Henrys.</p>
        <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
        <p>¡Gracias por unirte a voyHenry!</p>
        <p>Saludos cordiales,</p>
        <p>El equipo de voyHenry</p>
      `,
    }

    this.sendMail(mail)
  }

}

module.exports = MailerService;
