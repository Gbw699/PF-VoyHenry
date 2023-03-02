const Joi = require('joi')

const id = Joi.number()
const title = Joi.string().min(3).max(55)
const price = Joi.number().greater(0)
const detail = Joi.string().min(5).max(255)
const mainImage = Joi.string().uri()
const availability = Joi.boolean()

const category = Joi.string().valid('Remeras', 'Pantalones',  'Gorros')
const images = Joi.array()

const getProductSchema = Joi.object({
  id: id.required()
})

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  detail: detail.required(),
  mainImage: mainImage.required(),
  availability: availability.required(),

  category: category.required(),
  images:images.required()

})

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  detail: detail,
  mainImage: mainImage,
  availability: availability,
  category: category,
  images:images
})

const buyProductSchema = Joi.object({
  id: id,
  title: title,
  price: price
})

module.exports = {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
  buyProductSchema
}
