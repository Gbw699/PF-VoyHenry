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

const checkRole = (req, res, next) => {
  const user = req.user;
  if (user.role === 'admin') {
    next()
  } else {
    res.json(user)
    /* next(new CustomError("unauthorized", 401)) */
  }
}

const checkRoleClosure = (nick) => {
  return (req, res, next) => {

    const userNick = req.params[nick]
    const user = req.user;

    if (user.role === 'admin') {
      next()
    } else if(user.nick === userNick){
      next()
    }else {
      next(new CustomError("forbidden", 403))
    }

  }
}
module.exports = {
  checkApiKey,
  checkRole,
  checkRoleClosure
};
