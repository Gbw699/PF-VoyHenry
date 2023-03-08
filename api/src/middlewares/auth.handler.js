const { CustomError } = require('./error.handler');
require('dotenv').config();

const checkAdminRole = (req, res, next) => {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(new CustomError('forbidden', 403));
  }
};

const checkRoleClosure = (nick) => {
  return (req, res, next) => {
    const userNick = req.params[nick];
    const user = req.user;

    if (user.role === 'admin') {
      next();
    } else if (user.nick === userNick) {
      next();
    } else {
      next(new CustomError('forbidden', 403));
    }
  };
};
module.exports = {
  checkAdminRole,
  checkRoleClosure,
};
