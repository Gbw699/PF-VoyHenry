const Joi = require('joi')

//no se puede hacer un evento en passasaddo
const currentDate = new Date();
const greaterDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

const id = Joi.number()
const title = Joi.string().min(3).max(15)
const summary = Joi.string().max(125)
const description = Joi.string().min(3).max(255)
const mainImage = Joi.string().uri()
const images = Joi.array()
const state = Joi.string().valid('En planeacion', 'En progreso',  'Finalizado')
const eventDate = Joi.date().greater(greaterDate);
const userNickName = Joi.string().alphanum().min(0).max(25)
const stars = Joi.number().min(0).max(5)
const votes = Joi.number().min(0).max(1)
const country = Joi.string().max(40)
const province = Joi.string().max(40)
const city = Joi.string().max(40)
const address = Joi.string().max(40)



const getPlanSchema = Joi.object({
  id: id.required()
})

const createPlanSchema = Joi.object({
  userNickName: userNickName.required(),
  title: title.required(),
  summary: summary.required(),
  description: description.required(),
  mainImage: mainImage.required(),
  images: images.required(),
  state: state.required(),
  eventDate: eventDate.required(),
  country: country.required(),
  province: province.required(),
  city: city.required(),
  address: address.required()
})

const updateSchema = Joi.object({
  title: title,
  summary: summary,
  description: description,
  mainImage: mainImage,
  images: images,
  state: state,
  eventDate: eventDate,
  country: country,
  province: province,
  city: city, 
  address: address
})

const deletePlanSchema = Joi.object({
  id: id.required()
})

const ratingSchema = Joi.object({
  stars: stars.required(),
  votes: votes.required(),
  userNickName: userNickName.required(),
})

const followSchema = Joi.object({
  userNickName: userNickName.required(),
})

module.exports = {
  createPlanSchema,
  updateSchema,
  getPlanSchema,
  deletePlanSchema,
  ratingSchema,
  followSchema
}

