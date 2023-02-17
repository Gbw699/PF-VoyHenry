const usersModel = require('../libs/models/users.model');
const { CustomError } = require('../middlewares/error.handler')
const { Op } = require("sequelize");

class UsersService {

  constructor(){

  }

  /* Create user */

  async create ({ genre, email, about, nickName, image, firstName, lastName, dateOfBirth, password, role }) {

    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60));

    const newUser = await usersModel.create({
      password: password,
      role: role,
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

  async find (query) {

    const options = {

      order: [['firstName', 'ASC']]
    }
    
    if (query.order == 'reverso'){
      options.order = [['firstName', 'DESC']]
    }

    if (query.name){
      options.where = {
          [Op.or]: [
            { firstName: { [Op.substring]: query.name } },
            { lastName: { [Op.substring]: query.name } }
          ]
        }
    }

    const users = await usersModel.findAll(options)
    return {users}
  
  }

  /* Find one User */

  async findOne (nickName) {

    const user = await usersModel.findByPk(nickName)

    if (user === null) {
      throw new CustomError("User not found", 404)
    }

    return user

  }

  /* Update user */

  async update (userNickName, { genre, email, nickName, about, image, firstName, lastName, dateOfBirth , password, role}) {

    const user = await usersModel.findByPk(userNickName)

    if (user === null) {
      throw new CustomError("User not found", 404)
    }

    user.password = password || user.password;
    user.role = role || user.role;
    user.genre = genre || user.genre;
    user.nickName = nickName || user.nickName;
    user.email = email || user.email;
    user.about = about || user.about;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
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
      throw new CustomError("User not found", 404)
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

/* 
{
    "password": "password",
    "role": "role",
    "nickName": "first",
    "email": "email@test.com",
    "about": "about",
    "firstName": "afirstName",
    "lastName": "alastName",
    "genre": "No binario",
    "dateOfBirth":"1999-12-16",
    "image": "https://es.wikipedia.org/wiki/Roque_S%C3%A1enz_Pe%C3%B1a#/media/Archivo:Roque_Saenz_Pe%C3%B1a_(obituario_1914).jpg"
} */