const blogModel = require('../libs/models/blog-model.js');
const users = require('../libs/models/users.model.js');
const { CustomError } = require('../middlewares/error.handler')
const { Op } = require("sequelize");
const sequelize = require('../libs/database/database');



class blogService {

  constructor(){

  }

  /* Find All Blogs */

  async find (query, page) {

    const options = {

      order: [['updatedAt', 'DESC']],
      limit: 3,
      offset : 0
    }

    options.where = {}

    if (query.date) {

      options.where.date = { [Op.eq]: `${query.date}` };
    }

    if (query.order) {
      if (query.order === 'alfabetico') {
        options.order = [['title', 'ASC']];
      } else if (query.order === 'reverso') {
        options.order = [['title', 'DESC']];
      } else if (query.order === 'masvotados') {

        options.order = [['average', 'DESC']];

      } else if (query.order === 'menosvotados') {
        options.order = [['average', 'ASC']];
      }
    }


    if (query.offset) {

      options.offset = (page - 1) * query.offset;
    }

    if (query.page) {
      const page = parseInt(query.page);
      if (isNaN(page) || page < 1) {
        throw new CustomError('Page not found', 404);
      }
      options.offset = (page - 1) * (options.limit || query.limit);
    }

    const blogs = await blogModel.findAll(options)

    if (blogs === null|| blogs.length === 0) {
      throw new CustomError("Blog not found", 404)
    } else {
      return {blogs}
    }

  }

  /* Find One Blog */

async findOne (id) {

  const blog = await blogModel.findByPk(id)

  if (blog === null) {
    throw new CustomError("Blog not found", 404)
  }

  const search = await users.findOne({where: { nickName: blog.userNickName }  });

  return {
    message: "blog",
    data: {
      blog,
      users: search
    }
  }
}

  /* Create Blog */

async create (  {userNickName, title , content, stars, image} ){

  const searchname = await users.findOne({where: { nickName: userNickName }  });

  const newBlog =  await blogModel.create({
    userNickName: userNickName,
    userimage: searchname.image,
    image: image,
    title: title,
    content: content,
    stars: stars,
  })

    const userBlogTable = await sequelize.models.users_votes_blogs.create({

      userNickName: userNickName,

      blogid: newBlog.id
    })

  return {
    message: "Create",
    data: {
      newBlog,
      user: searchname,
      userBlogTable: userBlogTable
    }
  }
}

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

  /* Update Blog votes*/

  async updateVotes (id, { votes, stars, userNickName }) {

    const blog = await blogModel.findOne({
      where: {
        id: id
      }}
    )
    const newBlog = await sequelize.models.users_votes_blogs.create({

      userNickName: userNickName,

      blogid: id
    })


    if (blog === null) {
      throw new CustomError("Blog not found", 404)
    }

    blog.votes += votes,
    blog.stars += stars

    await blog.save()

   // return blog;
   return {
    message: "voted",
    data: {
      blog,
      user_and_blog: newBlog
    }
  };

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

}

  /* Count Pages */
async count () {
  const options = {};

  const count = await blogModel.count(options);

  return count;
}

}



module.exports = blogService;
