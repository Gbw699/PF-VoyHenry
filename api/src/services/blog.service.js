const blogModel = require('../libs/models/blog-model.js');
const { CustomError } = require('../middlewares/error.handler')


class blogService {

  constructor(){

  }

    /* Create Blog */

  async create (  userName, title , content, rating ){


    const newBlog =  await blogModel.create({
     userName: userName,
     title: title,
     content: content,
     rating: rating
    })

    return {
      message: "Create",
      data: {
        newBlog
      }
    };


    }

  /* Find All Blogs */

  async find (query) {

    const options = {

      order: [['id', 'DESC']]
    }

    if (query.order) {
      if (query.order === 'ascendente') {
        options.order = [['rating', 'ASC']];
      } else if (query.order === 'descendente') {
        options.order = [['rating', 'DESC']];
      } else if (query.order === 'alfabetico'){
        options.order = [['title', 'ASC']];
      } else if (query.order === 'reverso'){
        options.order = [['title', 'DESC']];
      }
    }

    const blogs = await blogModel.findAll(options)
    return {blogs}

  }

  /* Find One Blog */

  async findOne (id) {

    const blog = await blogModel.findByPk(id)

    if (blog === null) {
      throw new CustomError("Blog not found", 404)
    }

    return blog

  }

  /* Update Blog */

  async update (id, {userName, title , content, rating }) {


    const blog = await blogModel.findOne({
      where: {
        id: id
      }}
    )
    if (blog === null) {
      throw new CustomError("Blog not found", 404)
    }
    blog.userName = userName || blog.userName;
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.rating = rating || blog.rating;

      await blog.save()

      return blog;

  }

  /* Delete Blog */

 async delete (id) {

    const deletedblog = await blogModel.destroy({
      where: {
        id: id
      }
    })

  if (deletedblog === 0){
    throw new CustomError("Blog not found", 404)
  } else {
    return {
      message: "deleted",
      data: {
        id: id
      }
    }
  }

}}



module.exports = blogService;
