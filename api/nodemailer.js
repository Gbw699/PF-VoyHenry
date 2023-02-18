const nodemailer = require("nodemailer");
require('dotenv').config();

const {
  MAILER_PASS
} = process.env

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
        user: 'pf.voyhenry@gmail.com',
        pass: MAILER_PASS
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'pf.voyhenry@gmail.com', // sender address
    to: "matiasxvarela@gmail.com", // list of receivers
    subject: "Esto es una prueba", // Subject line
    text: "Soy el texto de una prueba", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
