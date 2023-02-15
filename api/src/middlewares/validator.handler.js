const { CustomError } = require('../middlewares/error.handler')

function validatorHandler(schema, property) {
  return (req, res, next) => {

    const data = req[property]
    const { error } = schema.validate(data);

    if(error) {
      next(new CustomError(error.message, 400))
    }
    next()

  }
}

module.exports = validatorHandler;
