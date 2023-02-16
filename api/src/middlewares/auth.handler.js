const { CustomError } = require('./error.handler')
require('dotenv').config();

const {
  API_KEY
} = process.env

const checkApiKey = (req, res, next) => {

  const apiKey = req.headers['api']

  if (apiKey === API_KEY){
    next()
  } else {
    throw new CustomError("unauthorized", 401)
  }

}

module.exports = {
  checkApiKey
};
