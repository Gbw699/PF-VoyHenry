const Joi = require('joi')


const id = Joi.number().min(1)
const userName = Joi.string().alphanum().min(0).max(15)
const title = Joi.string().min(3).max(30)
const content = Joi.string().max(500)
const rating = Joi.number().min(0).max(10)


const createBlogSchema = Joi.object({
  userName: userName.required(),
  title: title.required(),
  content: content.required(),
  rating: rating.required()

})

const updateSchema = Joi.object({
  userName: userName,
  title: title,
  content: content,
  rating: rating

 })

const getBlogSchema = Joi.object({
  id: id.required()

  })

module.exports = {
  createBlogSchema,
   updateSchema,
   getBlogSchema
}

