const Joi = require('joi')


const id = Joi.number().min(1)
const userNickName = Joi.string().alphanum().min(0).max(25)
const title = Joi.string().min(3).max(30)
const content = Joi.string().max(500)
const image = Joi.string().uri()
const stars = Joi.number().min(0).max(5)
const votes = Joi.number().min(0).max(1)
const comment = Joi.string().max(500)

const createBlogSchema = Joi.object({
  userNickName: userNickName.required(),
  image: image.required(),
  title: title.required(),
  content: content.required(),
  stars: stars.required()

})

const updateSchema = Joi.object({
  userNickName: userNickName,
  title: title,
  content: content,
  stars: stars,
  image: image

})

const getBlogSchema = Joi.object({
  id: id.required()

})

const ratingSchema = Joi.object({
  stars: stars.required(),
  votes: votes.required(),
  userNickName: userNickName.required(),

})

const favorites = Joi.object({
  userNickName: userNickName.required()

})

const coments = Joi.object({
  userNickName: userNickName.required(),
  comment: comment.required(),
})

module.exports = {
  createBlogSchema,
   updateSchema,
   getBlogSchema,
   ratingSchema,
   favorites,
   coments
}

