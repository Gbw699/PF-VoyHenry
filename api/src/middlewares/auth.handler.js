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

const checkAdminRole = (req, res, next) => {
  const user = req.user;
  if (user.role === 'admin') {
    next()
  } else {
    next(new CustomError("unauthorized", 401))
  }
}

module.exports = {
  checkApiKey,
  checkAdminRole
};
