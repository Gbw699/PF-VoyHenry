const usersModel = require('../libs/models/users.model')

class UsersService {

  constructor(){

  }

  /* Create user */

  async create ({ genre, email, nickName, image, firstName, lastName, dateOfBirth }) {

    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60));

    const newUser = await usersModel.create({
      nickName: nickName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      genre: genre,
      dateOfBirth: new Date(dateOfBirth),
      image: image
    })

    return {
      message: "Create",
      data: {
        newUser
      }
    };
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
