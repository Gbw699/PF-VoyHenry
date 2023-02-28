const usersModel = require('../libs/models/users.model');
const { CustomError } = require('../middlewares/error.handler')
const bcrypt = require('bcrypt')
const { Op } = require("sequelize");
const blogModel = require('../libs/models/blog-model');
const plansModel = require('../libs/models/plans.model');


class UsersService {

  constructor(){

  }

  /* Create user */

  async create ({ genre, nationality, email, about, nickName, image, firstName, lastName, dateOfBirth, password, role }) {

    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60));

    const hash = await bcrypt.hash(password, 10)

    const newUser = await usersModel.create({
      password: hash,
      role: role,
      nickName: nickName,
      email: email.toLowerCase(),
      about: about,
      firstName: firstName,
      lastName: lastName,
      genre: genre,
      nationality: nationality,
      dateOfBirth: new Date(dateOfBirth),
      image: image
    })

    delete newUser.dataValues.password;

    return {
      message: "Create",
      data: {
        newUser
      }
    };
  }

  /* Create with google */

  async createWithGoogle ({nickName, email, firstName, lastName, image, genre, dateOfBirth}) {

    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60));

    const newUser = await usersModel.findOrCreate({
      where: {
        nickName: nickName,
      },
      defaults: {
        email: email.toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        dateOfBirth: new Date(dateOfBirth),
        image: image,
        google: true,
      }
    })

    newUser[1] = {
      newUser: newUser[1]
    }

    return newUser
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
          {
            [Op.or]: [
              { firstName: { [Op.substring]: query.name } },
              { firstName: { [Op.iLike]: query.name } },
            ]
          },
          {
            [Op.or]: [
              { lastName: { [Op.iLike]: query.name } },
              { lastName: { [Op.substring]: query.name } }
            ]
          }
        ]
      }
    }

    const users = await usersModel.findAll(options)
    return {users}

  }

  /* Find one User */

  async findOne (nickName) {

    const user = await usersModel.findByPk(nickName, {
      attributes: [ "genre", "email", "about", "nickName", "image", "firstName", "lastName", "dateOfBirth", "role", "createdAt", "updatedAt", "recoveryToken" ]
    })

    if (user === null) {
      throw new CustomError("User not found", 404)
    }

    return user

  }

  async findByEmail (email) {

    email = email.toLowerCase()

    const user = await usersModel.findOne({
      where: { email }
    })

    if (user === null) {
      throw new CustomError("User not found", 404)
    }

    return user

  }

    /* Find User all Blogs*/

    async findBlogs (nickName,query, page) {

      const options = {

        order: [['title', 'DESC']],
        limit: 3,
        offset : 0
      }

     if (query.offset) {

       options.offset = (page - 1) * query.offset;
     }

     if (query.page) {
       const page = parseInt(query.page);
       if (isNaN(page) || page < 1) {
         throw new CustomError('Page not found', 404);
        }
        options.offset = (page - 1) * (options.limit || query.limit);
      }


      const blogs = await blogModel.findAll({limit: options.limit, offset: options.offset, where: {userNickName: nickName}})


      if (blogs === null||blogs.length === 0) {
        throw new CustomError("This user don't have any blog", 404)
      }else{
        return {blogs}
      }

    }

    /* Find User all Plans*/

    async findPlans (nickName) {

      const user = await plansModel.findAll({where: {userNickName: nickName}})

      if (user.length === 0) {
        throw new CustomError("This user don't have any plans", 404)
      }

      return user

    }

  /* Update user */

  async update (userNickName, { genre, email, nickName, about, image, firstName, lastName, dateOfBirth , password, role, recoveryToken}) {

    const user = await usersModel.findByPk(userNickName)

    if (user === null) {
      throw new CustomError("User not found", 404)
    }

    const hash = password && await bcrypt.hash(password, 10)

    user.password = hash || user.password;
    user.role = role || user.role;
    user.genre = genre || user.genre;
    user.nickName = nickName || user.nickName;
    user.recoveryToken = recoveryToken || null;
    user.email = email || user.email.toLowerCase();
    user.about = about || user.about;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.image = image || user.image;

    await user.save()

    delete user.dataValues.password;

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


  /* Count Pages */
  async count (nickName) {

    const count = await blogModel.count({where:{userNickName: nickName}});

    return count;
  }

  }

module.exports = UsersService;

