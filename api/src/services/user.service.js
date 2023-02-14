const usersModel = require('../libs/models/users.model')

class UsersService {

  constructor(){

  }

  /* Create user */

  create ({ email, nickName, image, firstName, lastName }) {

    return {
      message: "post user",
      data: {
        email: email,
        nickName: nickName,
        firstName: firstName,
        lastName: lastName,
        image: image
      }
    }

  }

  /* Find all Users */

  async find () {

    const users = await usersModel.findAll()
    return {users}

  }

  /* Find one User */

  findOne (nickName) {

    return {message: `esto deberia mostrar el usuario ${nickName}`}

  }

  /* Update user */

  update (userNickName, { email, nickName, image, firstName, lastName }) {

    return {
      message: "patch user",
      data: {
        userNickName: userNickName,
        email: email,
        nickName: nickName,
        firstName: firstName,
        lastName: lastName,
        image: image
      }
    }

  }

  /* Delete user */

  delete (userNickName) {

    return {
      message: "deleted",
      data: {
        userNickName: userNickName,
      }
    }

  }

}

module.exports = UsersService;
