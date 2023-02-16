const Joi = require('joi')

//no se puede hacer un evento en passasaddo
const currentDate = new Date();
const greaterDate = `${currentDate.getFullYear() - 99}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;


const title = Joi.string().min(3).max(15)
const summary = Joi.string().max(125)
const description = Joi.string().min(3).max(255)
const mainImage = Joi.string().uri()
const images = Joi.string().array()
const state = Joi.string().valid('En Planeacion', 'En progreso',  'Finalizado')
const eventDate = Joi.date().greater(greaterDate);

const getPlanSchema = Joi.object({
  title: title.required()
})

const createPlanSchema = Joi.object({
  title: title.required(),
  summary: summary.required(),
  description: description.required(),
  mainImage: mainImage.required(),
  images: images.required(),
  state: state.required(),
  eventDate: eventDate.required()
})

const updateSchema = Joi.object({
  title: title,
  summary: summary,
  description: description,
  mainImage: mainImage,
  images: images,
  state: state,
  eventDate: eventDate
})

module.exports = { 
  createPlanSchema,
  updateSchema, 
  getPlanSchema 
}

