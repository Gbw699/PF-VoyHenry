const Joi = require('joi')


const id = Joi.number().min(1)
const userNickName = Joi.string().alphanum().min(0).max(15)
const title = Joi.string().min(3).max(30)
const content = Joi.string().max(500)
const evaluation = Joi.number().min(0).max(5)
const image = Joi.string().uri()

const stars = Joi.number().min(0).max(5)
const votes = Joi.number().min(0).max(1)


const createBlogSchema = Joi.object({
  userNickName: userNickName.required(),
  image: image.required(),
  title: title.required(),
  content: content.required(),
  evaluation: evaluation.required()

})

const updateSchema = Joi.object({
  userNickName: userNickName,
  title: title,
  content: content,
  evaluation: evaluation,
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


module.exports = {
  createBlogSchema,
   updateSchema,
   getBlogSchema,
   ratingSchema
}

