const blogModel = require('../libs/models/blog-model.js');


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

  async find () {

    const blogs = await blogModel.findAll()
    return {blogs}

  }

  /* Find One Blog */

  async findOne (id) {

    const blog = await blogModel.findByPk(id)

    if (blog === null) {
      throw new Error("blog not found")
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
      throw new Error("Post not found")
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
    throw new Error("blog not found")
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
