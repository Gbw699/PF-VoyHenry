const Joi = require('joi')

/* This is to see the current date and approximately 99 years ago and 18 years ago or so. */

const currentDate = new Date();
const greaterDate = `${currentDate.getFullYear() - 99}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
const lessDate = `${currentDate.getFullYear() - 18}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

//

const nickName = Joi.string().alphanum().min(3).max(25)
const email = Joi.string().email()
const password = Joi.string().min(8);
const role = Joi.string().min(3);
const genre = Joi.string().valid('Femenino', 'Masculino', 'No binario', 'Prefiero no decirlo', 'Otro');
const about = Joi.string().max(255)
const dateOfBirth = Joi.date().greater(greaterDate).less(lessDate);
const firstName = Joi.string().alphanum().min(3).max(55)
const lastName = Joi.string().alphanum().min(3).max(55)
const image = Joi.string().uri()
const userNickName = Joi.string().alphanum().min(3).max(25)


const createUserSchema = Joi.object({
  nickName: nickName.required(),
  password: password.required(),
  email: email.required(),
  genre: genre.required(),
  role: role,
  about: about,
  dateOfBirth: dateOfBirth.required(),
  firstName: firstName.required(),
  lastName: lastName,
  image: image.required()
})

const updateSchema = Joi.object({
  nickName: nickName,
  password: password,
  email: email,
  genre: genre,
  about: about,
  role: role,
  dateOfBirth: dateOfBirth,
  firstName: firstName,
  lastName: lastName,
  image: image
})

const getUserSchema = Joi.object({
  nickName: nickName.required()
})

const userFollowSchema = Joi.object({
  userNickName: userNickName.required()
})

module.exports = {
  createUserSchema,
  updateSchema,
  getUserSchema,
  userFollowSchema
}

