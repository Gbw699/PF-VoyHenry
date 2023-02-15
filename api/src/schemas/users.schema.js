const Joi = require('joi')

/* This is to see the current date and approximately 99 years ago and 18 years ago or so. */

const currentDate = new Date();
const greaterDate = `${currentDate.getFullYear() - 99}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
const lessDate = `${currentDate.getFullYear() - 18}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

//

const nickName = Joi.string().alphanum().min(3).max(15)
const email = Joi.string().email()
const genre = Joi.string().valid('Femenino', 'Masculino', 'No binario', 'Prefiero no decirlo', 'Otro');
const about = Joi.string().max(255)
const dateOfBirth = Joi.date().greater(greaterDate).less(lessDate);
const firstName = Joi.string().alphanum().min(3).max(55)
const lastName = Joi.string().alphanum().min(3).max(55)
const image = Joi.string().uri()

const createUserSchema = Joi.object({
  nickName: nickName.required(),
  email: email.required(),
  genre: genre.required(),
  about: about,
  dateOfBirth: dateOfBirth.required(),
  firstName: firstName.required(),
  lastName: lastName,
  image: image.required()
})

const updateSchema = Joi.object({
  nickName: nickName,
  email: email,
  genre: genre,
  about: about,
  dateOfBirth: dateOfBirth,
  firstName: firstName,
  lastName: lastName,
  image: image
})

const getUserSchema = Joi.object({
  nickName: nickName.required()
})

module.exports = {
  createUserSchema,
  updateSchema,
  getUserSchema
}

