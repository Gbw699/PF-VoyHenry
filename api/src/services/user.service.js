const usersModel = require('../libs/models/users.model');

class UsersService {

  constructor(){

  }

  /* Create user */

  async create ({ genre, email, about, nickName, image, firstName, lastName, dateOfBirth }) {

    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60));

    const newUser = await usersModel.create({
      nickName: nickName,
      email: email,
      about: about,
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

  async findOne (nickName) {

    const user = await usersModel.findByPk(nickName)

    return user

  }

  /* Update user */

  async update (userNickName, { genre, email, nickName, about, image, firstName, lastName, dateOfBirth }) {

    const user = await usersModel.findByPk(userNickName)

    user.genre = genre || user.genre;
    user.nickName = nickName || user.nickName;
    user.email = email || user.email;
    user.about = about || user.about;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.dateOfBirth = dateOfBirth || user.lastName;
    user.image = image || user.image;

    await user.save()

    return user;

  }

  /* Delete user */

  async delete (userNickName) {

    const deletedUser = await usersModel.destroy({
      where: {
        nickName: userNickName
      }
    })

    if (deletedUser === 0){
      throw new Error("User not found")
    } else {
      return {
        message: "deleted",
        data: {
          userNickName: userNickName
        }
      }
    }

  }

}

module.exports = UsersService;
