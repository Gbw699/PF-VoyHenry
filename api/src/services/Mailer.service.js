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

  sendPlanCreateEmail(user, {title}){
    const mail = {
    from: MAIL,
    to: user.email,
    subject: `¡Felicidades por crear tu plan, ${user.firstName}`,
    html: `
    <h2>Hola ${user.firstName},</h2>
    <h3>¡Felicidades por crear tu plan llamado ${title} en voyHenry!</h3>
    <p>No te olvides de visitar nuestra seccion de planes, donde podras encontrar los planes que crean personas cercanas.</p>
    <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
    <p>¡Gracias por ser parte de voyHenry!</p>
    <p>Saludos cordiales,</p>
    <p>El equipo de voyHenry</p>
    `
    }
    this.sendMail(mail)
  }


  sendFollowingPlanCreateEmail(user, {title}, userid, usermail){

 for (let i = 0; i < userid.length; i++) {
    const mail = {
    from: MAIL,
    to: usermail[i],
    subject: `¡El usuario al que sigues ${user.firstName}, a creado un nuevo plan llamado ${title}`,
    html: `
    <h2>Hola ${userid[i]},</h2>
    <h3>¡el usuario ${user.firstName} a creado el plan llamado ${title} en voyHenry!</h3>
    <p>No te olvides de visitar nuestra seccion de planes, donde podras encontrar los planes que crean personas cercanas.</p>
    <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
    <p>¡Gracias por ser parte de voyHenry!</p>
    <p>Saludos cordiales,</p>
    <p>El equipo de voyHenry</p>
    `
    }
    this.sendMail(mail)
  }
}

sendPlanVoteEmail({firstName, email}, {title}){
  const mail = {
  from: MAIL,
  to: email,
  subject: `¡Muchas gracias por calificar, ${firstName}`,
  html: `
  <h2>Hola ${firstName},</h2>
  <h3>¡Muchas por calificar el plan llamado ${title} en voyHenry!</h3>
  <p>Tu valoracion significa mucho para nosotros.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
}


sendFollowingPlanVoteEmail(user, {title}, userid, usermail){
  for (let i = 0; i < userid.length; i++) {
     const mail = {
     from: MAIL,
     to: usermail[i],
     subject: `¡El usuario al que sigues ${user.firstName}, a calificado el plan llamado ${title}`,
     html: `
     <h2>Hola ${userid[i]},</h2>
     <h3>¡el usuario ${user.firstName} a calificado el plan llamado ${title} en voyHenry!</h3>
     <p>No te olvides de visitar nuestra seccion de planes, donde podras calificar y dejar tus impresiones de los planes creados por otros usuarios.</p>
     <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
     <p>¡Gracias por ser parte de voyHenry!</p>
     <p>Saludos cordiales,</p>
     <p>El equipo de voyHenry</p>
     `
     }
     this.sendMail(mail)
   }
 }






























//-------------------------------------------------------------------------------------------------------------------------------------------------------






 sendBlogCreateEmail(user, {title}){
  const mail = {
  from: MAIL,
  to: user.email,
  subject: `¡Felicidades por crear tu reseña, ${user.firstName}`,
  html: `
  <h2>Hola ${user.firstName},</h2>
  <h3>¡Felicidades por crear tu reseña llamado ${title} en voyHenry!</h3>
  <p>No te olvides de visitar nuestra seccion de Blogs, donde podras encontrar las reseñas que creadas por otros usuarios.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
}


sendFollowingBlogCreateEmail(user, {title}, userid, usermail){

for (let i = 0; i < userid.length; i++) {
  const mail = {
  from: MAIL,
  to: usermail[i],
  subject: `¡El usuario al que sigues ${user.firstName}, a creado una nueva reseña llamada ${title}`,
  html: `
  <h2>Hola ${userid[i]},</h2>
  <h3>¡el usuario ${user.firstName} a creado una reseña llamada ${title} en voyHenry!</h3>
  <p>No te olvides de visitar nuestra seccion de Blogs, donde podras encontrar las reseñas creadas por otros usuarios.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
}
}

sendBlogVoteEmail({firstName, email}, {title}){
const mail = {
from: MAIL,
to: email,
subject: `¡Muchas gracias por calificar, ${firstName}`,
html: `
<h2>Hola ${firstName},</h2>
<h3>¡Muchas por calificar las reseña llamada ${title} en voyHenry!</h3>
<p>Tu valoracion significa mucho para nosotros.</p>
<p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
<p>¡Gracias por ser parte de voyHenry!</p>
<p>Saludos cordiales,</p>
<p>El equipo de voyHenry</p>
`
}
this.sendMail(mail)
}


sendFollowingBlogVoteEmail(user, {title}, userid, usermail){
for (let i = 0; i < userid.length; i++) {
   const mail = {
   from: MAIL,
   to: usermail[i],
   subject: `¡El usuario al que sigues ${user.firstName}, a calificado la reseña llamada ${title}`,
   html: `
   <h2>Hola ${userid[i]},</h2>
   <h3>¡el usuario ${user.firstName} a calificado la reseña llamada ${title} en voyHenry!</h3>
   <p>No te olvides de visitar nuestra seccion de Blogs, donde podras calificar y dejar tus impresiones de las reseñas creadas por otros usuarios.</p>
   <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
   <p>¡Gracias por ser parte de voyHenry!</p>
   <p>Saludos cordiales,</p>
   <p>El equipo de voyHenry</p>
   `
   }
   this.sendMail(mail)
 }
}








//----------------------------------------------------------------------------------------------------------------------------------






sendUserFollowUserEmail(user, nickName){
  const mail = {
  from: MAIL,
  to: user.email,
  subject: `¡Un nuevo usuario esta siguiendote  ${user.firstName}`,
  html: `
  <h2>Hola ${user.firstName},</h2>
  <h3>¡El usuario llamado ${nickName} ahora te esta siguiendo!</h3>
  <p>No te olvides de visitar nuestra seccion de usuarios, donde podras conectar con otros usuarios.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
}




sendUserStopFollowUserEmail(user, nickName){
  const mail = {
  from: MAIL,
  to: user.email,
  subject: `¡Un usuario a dejado de seguirte  ${user.firstName}`,
  html: `
  <h2>Hola ${user.firstName},</h2>
  <h3>¡El usuario llamado ${nickName} a dejado de seguirte!</h3>
  <p>No te olvides de visitar nuestra seccion de usuarios, donde podras conectar con otros usuarios.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
}






//-------------------------------------------------------------------------------------------------------------------------------------------------------


sendBlogCommentEmail({firstName, email}, {title}, userNickName){
  const mail = {
  from: MAIL,
  to: email,
  subject: `¡El usuario llamado ${userNickName} a comentado en tu reseña`,
  html: `
  <h2>Hola ${firstName},</h2>
  <h3>¡El usuario llamado ${userNickName} a comentado en tu reseña llamada ${title}!</h3>
  <p>Revisa su contenido.</p>
  <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
  <p>¡Gracias por ser parte de voyHenry!</p>
  <p>Saludos cordiales,</p>
  <p>El equipo de voyHenry</p>
  `
  }
  this.sendMail(mail)
  }


  sendPlanCommentEmail({firstName, email}, {title}, userNickName){
    const mail = {
    from: MAIL,
    to: email,
    subject: `¡El usuario llamado ${userNickName} a comentado en tu plan`,
    html: `
    <h2>Hola ${firstName},</h2>
    <h3>¡El usuario llamado ${userNickName} a comentado en tu plan llamada ${title}!</h3>
    <p>Revisa su contenido.</p>
    <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
    <p>¡Gracias por ser parte de voyHenry!</p>
    <p>Saludos cordiales,</p>
    <p>El equipo de voyHenry</p>
    `
    }
    this.sendMail(mail)
    }



//----------------------------------------------------------------------------------------------------------------------------------------
}

module.exports = MailerService;
