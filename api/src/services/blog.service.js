const blogModel = require('../libs/models/blog-model.js');
const users = require('../libs/models/users.model.js');
const comments = require('../libs/models/comments.users');
const { CustomError } = require('../middlewares/error.handler')
const { Op, where } = require("sequelize");
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

        //Modificar stars por average cuando estén implementados los votos
        options.order = [[sequelize.literal('stars'), 'DESC']];

      } else if (query.order === 'menosvotados') {
        options.order = [[sequelize.literal('stars'), 'ASC']];
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

    const blogsInFilter = await blogModel.count(options);

    const blogs = await blogModel.findAll(options)

    if (blogs === null|| blogs.length === 0) {
      throw new CustomError("Blog not found", 404)
    } else {
      return {blogs, blogsInFilter}
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

  /* Create Comment */

  async createComment(id, { userNickName, comment }) {
    const searchname = await users.findOne({
      where: { nickName: userNickName },
    });

    const searchblog = await blogModel.findOne({ where: { id: id } });

    const newCom = await comments.create({
      content: comment,
    });
    const commentUserTable = await sequelize.models.comments_users.create({
      userNickName: userNickName,

      commentid: newCom.id,
    });

    const commentBlogTable = await sequelize.models.comments_blogs.create({
      blogid: id,

      commentid: newCom.id,
    });

    return {
      message: 'Create',
      data: {
        newCom,
        commentUser: commentUserTable,
        commentPlans: commentBlogTable,
      },
    };
  }






























  /* Create favorite blog */

  async followblog(id, { userNickName  }) {

    const commentUserTable = await sequelize.models.user_favorite_blog.create({
      userid: userNickName,

      blogid: id,
    });

    return {
      message: 'Create',
      data: {

        favoriteBlog: commentUserTable,

      },
    };
  }



  /* Create favorite blog */

  async followplan(id, { userNickName  }) {

    const commentUserTable = await sequelize.models.user_favorite_plan.create({
      userid: userNickName,

      planid: id,
    });

    return {
      message: 'Create',
      data: {

        favoriteBlog: commentUserTable,

      },
    };
  }




  async follow (nickName,{userNickName}) {

    //const count = await blogModel.count({where:{userNickName: nickName}});
    console.log(nickName)
    console.log(userNickName)
    const userFollowUser = await sequelize.models.user_follow_user.create({
      userid: userNickName,

      followUserId: nickName,
    });



    return userFollowUser;
  }








































  // Get favorite by nickname

  async getFollowBlog(nickName) {

    const commentsBlogs = await sequelize.models.user_favorite_blog.findAll({
      where: { userid: nickName },
    });

    const commentIds = commentsBlogs.map(
      (comment) => comment.dataValues.blogid
    );

    const comment = await blogModel.findAll({
      where: { id: commentIds },
    });
    return comment;
  }











  // Get favorite by nickname

  async getFollowPlan(nickName) {

    const commentsBlogs = await sequelize.models.user_favorite_blog.findAll({
      where: { userid: nickName },
    });

    const commentIds = commentsBlogs.map(
      (comment) => comment.dataValues.blogid
    );

    const comment = await blogModel.findAll({
      where: { id: commentIds },
    });
    return comment;
  }


















































  // Get favorite by blogid

  async getFollowuser(id) {

    const commentsBlogs = await sequelize.models.user_favorite_blog.findAll({
      where: { blogid: id },
    });

    const commentIds = commentsBlogs.map(
      (comment) => comment.dataValues.userid
    );

     const comment = await users.findAll({
       where: { nickName: commentIds },
    });
   return comment;
  }










  /* Delete Blog */

  async deleteFavoriteBlog (id,{userNickName}) {

    const deletedblog = await sequelize.models.user_favorite_blog.destroy({
      where: {
         blogid: id,
         userid: userNickName
      }
    })

    if (deletedblog === 0){
      throw new CustomError("Blog not found", 404)
    } else {
      return {
        message: "blog favorite deleted",
        data: {
          id: deletedblog,

        }
      }
    }

  }
































  // Get comment

  async getComment(id) {
    const commentsBlogs = await sequelize.models.comments_blogs.findAll({
      where: { blogid: id },
    });
    const commentIds = commentsBlogs.map(
      (comment) => comment.dataValues.commentid
    );
    const comment = await comments.findAll({
      where: { id: commentIds },
      include: [{
        model: sequelize.models.users,
        through: {
          model: sequelize.models.comments_users,
          attributes: []
        }
      }]
    });
    return comment;
  }

  /* Count Pages */
  async count () {
   let  options = {}

    const count = await blogModel.count(options);

    return count;
  }

  }







module.exports = blogService;
