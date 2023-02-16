const { CustomError } = require('./error.handler')

const checkApiKey = (req, res, next) => {

  const apiKey = req.headers['api']

  if (apiKey === '123'){
    next()
  } else {
    throw new CustomError("unauthorized", 401)
  }

}

module.exports = {
  checkApiKey
};
