const usersModel = require('../libs/models/users.model');
const { CustomError } = require('../middlewares/error.handler');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const blogModel = require('../libs/models/blog-model');
const plansModel = require('../libs/models/plans.model');
const sequelize = require('../libs/database/database');
const MailerService = require('./Mailer.service');

const mailerService = new MailerService();

class UsersService {
  constructor() {}

  /* Create user */

  async create({
    genre,
    nationality,
    email,
    about,
    nickName,
    image,
    firstName,
    lastName,
    dateOfBirth,
    password,
    role,
  }) {
    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(
      dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60)
    );

    const hash = await bcrypt.hash(password, 10);

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
      image: image,
    });

    mailerService.sendWelcomeMail(newUser);

    delete newUser.dataValues.password;

    return {
      message: 'Create',
      data: {
        newUser,
      },
    };
  }

  /* Create with google */

  async createWithGoogle({
    nickName,
    email,
    firstName,
    lastName,
    image,
    genre,
    dateOfBirth,
  }) {
    dateOfBirth = new Date(dateOfBirth);
    dateOfBirth.setHours(
      dateOfBirth.getHours() + Math.abs(dateOfBirth.getTimezoneOffset() / 60)
    );

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
      },
    });

    newUser[1] = {
      newUser: newUser[1],
    };

    if (newUser[1].newUser) {
      mailerService.sendWelcomeMail(newUser[0].dataValues);
    }

    return newUser;
  }

  /* Find all Users */

  async find(query) {
    const options = {
      order: [['firstName', 'ASC']],
    };

    if (query.order == 'reverso') {
      options.order = [['firstName', 'DESC']];
    }

    if (query.name) {
      options.where = {
        [Op.or]: [
          {
            [Op.or]: [
              { firstName: { [Op.substring]: query.name } },
              { firstName: { [Op.iLike]: query.name } },
            ],
          },
          {
            [Op.or]: [
              { lastName: { [Op.iLike]: query.name } },
              { lastName: { [Op.substring]: query.name } },
            ],
          },
        ],
      };
    }

    const users = await usersModel.findAll(options);

    const following = [];
    for (let i = 0; i < users.length; i++) {
      following.push(
        users[i].nickName,
        await sequelize.models.user_follow_user.count({
          where: { followUserId: users[i].nickName },
        })
      );
    }

    const followed = [];
    for (let i = 0; i < users.length; i++) {
      followed.push(
        users[i].nickName,
        await sequelize.models.user_follow_user.count({
          where: { userid: users[i].nickName },
        })
      );
    }

    return { users, following: following, followed: followed };
  }

  /* Find one User */

  async findOne(nickName) {
    const user = await usersModel.findByPk(nickName, {
      attributes: [
        'genre',
        'email',
        'about',
        'nickName',
        'image',
        'firstName',
        'lastName',
        'dateOfBirth',
        'role',
        'createdAt',
        'updatedAt',
        'recoveryToken',
      ],
    });

    if (user === null) {
      throw new CustomError('User not found', 404);
    }

    return user;
  }

  /* Find user by email */

  async findByEmail(email) {
    email = email.toLowerCase();

    const user = await usersModel.findOne({
      where: { email },
    });

    if (user === null) {
      throw new CustomError('User not found', 404);
    }

    return user;
  }

  /* Find User all Blogs*/

  async findBlogs(nickName, query, page) {
    const options = {
      order: [['title', 'DESC']],
      limit: 3,
      offset: 0,
    };

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

    const blogs = await blogModel.findAll({
      limit: options.limit,
      offset: options.offset,
      where: { userNickName: nickName },
    });

    if (blogs === null || blogs.length === 0) {
      throw new CustomError("This user don't have any blog", 404);
    } else {
      return { blogs };
    }
  }

  /* Find User all Plans*/

  async findPlans(nickName) {
    const user = await plansModel.findAll({
      where: { userNickName: nickName },
    });

    if (user.length === 0) {
      throw new CustomError("This user don't have any plans", 404);
    }

    return user;
  }

  /* Update user */

  async update(
    userNickName,
    {
      genre,
      nationality,
      email,
      nickName,
      about,
      image,
      firstName,
      lastName,
      dateOfBirth,
      password,
      role,
      recoveryToken,
    }
  ) {
    const user = await usersModel.findByPk(userNickName);

    if (user === null) {
      throw new CustomError('User not found', 404);
    }

    const hash = password && (await bcrypt.hash(password, 10));

    user.password = hash || user.password;
    user.role = role || user.role;
    user.genre = genre || user.genre;
    user.nationality = nationality || user.nationality;
    user.nickName = nickName || user.nickName;
    user.recoveryToken = recoveryToken || null;
    user.email = email || user.email.toLowerCase();
    user.about = about || user.about;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.image = image || user.image;

    await user.save();

    delete user.dataValues.password;

    return user;
  }

  /* Delete user */

  async delete(userNickName) {
    const deletedUser = await usersModel.destroy({
      where: {
        nickName: userNickName,
      },
    });

    if (deletedUser === 0) {
      throw new CustomError('User not found', 404);
    } else {
      return {
        message: 'deleted',
        data: {
          userNickName: userNickName,
        },
      };
    }
  }

  /* Count Pages */
  async count(nickName) {
    const count = await blogModel.count({ where: { userNickName: nickName } });

    return count;
  }

  /* user follow user */

  async follow(nickName, { userNickName }) {
    if (nickName === userNickName) {
      throw new CustomError('Is not allow to follow yourself', 404);
    }

    const userFollowUserTable = await sequelize.models.user_follow_user.create({
      userid: nickName,

      followUserId: userNickName,
    });

    const searchname = await usersModel.findOne({
      where: { nickName: userNickName },
    });

    mailerService.sendUserFollowUserEmail(searchname, nickName);

    return {
      message: 'Create',
      data: {
        userFollowUser: userFollowUserTable,
      },
    };
  }

  // Get followed users

  async getFollowedUsers(nickName) {
    const users = await sequelize.models.user_follow_user.findAll({
      where: { userid: nickName },
    });

    const usersId = users.map((comment) => comment.dataValues.followUserId);

    const followed = await usersModel.findAll({
      where: { nickName: usersId },
    });

    const number = await sequelize.models.user_follow_user.count({
      where: { userid: nickName },
    });

    if (usersId[0] === undefined) {
      throw new CustomError("you don't follow any user", 404);
    }

    return {
      message: 'Create',
      data: {
        followedUsers: usersId,
        data: followed,
        count: number,
      },
    };
  }

  /* Get users following */

  async getUsersFollowing(nickName) {
    const followingUsers = await sequelize.models.user_follow_user.findAll({
      where: { followUserId: nickName },
    });

    const followingsUsersId = followingUsers.map(
      (comment) => comment.dataValues.userid
    );

    const user = await usersModel.findAll({
      where: { nickName: followingsUsersId },
    });

    const number = await sequelize.models.user_follow_user.count({
      where: { followUserId: nickName },
    });

    if (followingsUsersId[0] === undefined) {
      throw new CustomError('no user is following you', 404);
    }

    return {
      message: 'Create',
      data: {
        followingUsers: followingsUsersId,
        data: user,
        count: number,
      },
    };
  }

  /* Delete user follow */

  async deleteFollowUser(nickName, { userNickName }) {
    const deletedFollowedUser = await sequelize.models.user_follow_user.destroy(
      {
        where: {
          userid: nickName,
          followUserId: userNickName,
        },
      }
    );

    const searchname = await usersModel.findOne({
      where: { nickName: userNickName },
    });

    mailerService.sendUserStopFollowUserEmail(searchname, nickName);

    if (deletedFollowedUser === 0) {
      throw new CustomError('user relacion not exist', 404);
    } else {
      return {
        message: 'user follow deleted',
        data: {
          id: deletedFollowedUser,
        },
      };
    }
  }
}

module.exports = UsersService;
