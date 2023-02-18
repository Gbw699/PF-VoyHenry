const UsersService = require('./user.service')
const { CustomError } = require('../middlewares/error.handler')
const bcrypt = require('bcrypt')

const userService = new UsersService()

class AuthService {

  async getUser(email, password) {

    const user = await userService.findByEmail(email)

    console.log(user)

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new CustomError("unauthorized", 401)
    }

    delete user.dataValues.password;

    return user

  }


}

module.exports = AuthService;
