const blogModel = require('../libs/models/blog-model.js');


class blogService {

  constructor(){

  }


  async create (  username, titulo , contenido, rating ){


    const newBlog =  await blogModel.create({
     username: username,
     titulo: titulo,
     contenido: contenido,
     rating: rating
    })

    return {
      message: "Create",
      data: {
        newBlog
      }
    };


    }



  async find () {

    const blogs = await blogModel.findAll()
    return {blogs}

  }


  async findOne (titulo) {


    //console.log(username)

    const blog = await blogModel.findByPk(titulo)
    //console.log(blog)
    if (blog === null) {
      throw new Error("blog not found")
    }

    return blog

  }



  async update (userName, { titulo , contenido, rating }) {


    const blog = await blogModel.findByPk(titulo)

    if (blog === null) {
      throw new Error("Post not found")
    }
    // return {
    //     message: "patch blog",
    //     data: {
    //       userName: userName,
    //       titulo: titulo,
    //       contenido: contenido,
    //       rating: rating
    //     }
    //   }
  blog.titulo = titulo
  blog.contenido = contenido
  blog.rating = rating

      await blog.save()

      return blog;

  }

 async delete (titulo) {

    const deletedblog = await blogModel.destroy({
      where: {
        titulo: titulo
      }
    })

  if (deletedblog === 0){
    throw new Error("blog not found")
  } else {
    return {
      message: "deleted",
      data: {
        titulo: titulo
      }
    }
  }

}}



module.exports = blogService;
