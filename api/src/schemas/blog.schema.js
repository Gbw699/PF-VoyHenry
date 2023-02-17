const Joi = require('joi')


const id = Joi.number().min(1)
const usernickName = Joi.string().alphanum().min(0).max(15)
const title = Joi.string().min(3).max(30)
const content = Joi.string().max(500)
const rating = Joi.number().min(0).max(10)
const image = Joi.string().uri()


const createBlogSchema = Joi.object({
  usernickName: usernickName,
  image: image.required(),
  title: title.required(),
  content: content.required(),
  rating: rating.required()

})

const updateSchema = Joi.object({
  usernickName: usernickName,
  title: title,
  content: content,
  rating: rating,
  image: image
 })

const getBlogSchema = Joi.object({
  id: id.required()

  })

module.exports = {
  createBlogSchema,
   updateSchema,
   getBlogSchema
}

