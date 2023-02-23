const mercadopago = require("mercadopago");
require('dotenv').config();
const {
  ACCES_TOKEN
} = process.env

function mercadopagoconfig() {
  
  // Agrega credenciales
  mercadopago.configure({
    access_token: ACCES_TOKEN
  });
  
}

module.exports = { mercadopagoconfig }