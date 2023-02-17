const blogModel = require('../libs/models/blog-model.js');
const users = require('../libs/models/users.model.js');
const { CustomError } = require('../middlewares/error.handler')


class blogService {

  constructor(){

  }

    /* Create Blog */

    async create (  {usernickName, title , content, rating, image} ){

      const searchname = await users.findOne({where: { nickName: usernickName }  });

    const newBlog =  await blogModel.create({
     usernickName: usernickName,
     userimage: searchname.image,
     image: image,
     title: title,
     content: content,
     rating: rating,

})
    return {
      message: "Create",
      data: {
        newBlog,
         user: searchname

    }

    }}

  /* Find All Blogs */

  async find () {
    const blogs = await blogModel.findAll()

    return {blogs}

  }

  /* Find One Blog */

  async findOne (id) {

    const blog = await blogModel.findByPk(id)

    const search = await users.findOne({where: { nickName: blog.usernickName }  });


    if (blog === null) {
      throw new CustomError("Blog not found", 404)
    }

    return {
      message: "blog",
      data: {
         blog,
         users: search

    }

  }}

  /* Update Blog */

  async update (id, { title , content, rating, image }) {

    const blog = await blogModel.findOne({
      where: {
        id: id
      }}
    )
    if (blog === null) {
      throw new CustomError("Blog not found", 404)
    }
    blog.image = image || blog.image;
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
      message: "blog deleted",
      data: {
        id: id,

      }
    }
  }

}}



module.exports = blogService;
