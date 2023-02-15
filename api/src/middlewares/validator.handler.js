function validatorHandler(schema, property) {
  return (req, res, next) => {

    const data = req[property]
    const { error } = schema.validate(data);

    if(error) {
      next({
        status: 400,
        error: new Error(error)
      })
    }
    next()

  }
}

module.exports = validatorHandler;
