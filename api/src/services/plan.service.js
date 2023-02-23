const plansModel = require('../libs/models/plans.model');
const { CustomError } = require('../middlewares/error.handler');
const { Op, where } = require("sequelize");
const users = require('../libs/models/users.model.js');
const comments = require('../libs/models/comments.users.js')
const sequelize = require('../libs/database/database');



class PlansService {

  constructor(){

  }

  /* Find all Plans || Filter*/

  async find (query, page) {

    const options = {

      order: [['eventDate', 'ASC']],
      limit: 9,
      offset : 0
    }

    options.where = {}


    if (query.state){

      options.where.state = { [Op.like]: query.state };
    }

    if (query.contains){

      options.where.title = { [Op.substring]: query.contains };
    }

    if (query.order) {
      if (query.order === 'alfabetico') {
        options.order = [['title', 'ASC']];
      } else if (query.order === 'reverso') {
        options.order = [['title', 'DESC']];
      } else if (query.order === 'antiguos'){
        options.order = [['eventDate', 'DESC']];
      } else if (query.order === 'masvotados') {
        options.order = [[sequelize.literal('stars/votes'), 'DESC']];
      } else if (query.order === 'menosvotados') {
        options.order = [[sequelize.literal('stars/votes'), 'ASC']];
      }
    }

    if (query.date) {

      options.where.eventDate = { [Op.eq]: `%${query.date}%` };
    }

    if (query.limit) {

      options.limit = query.limit;
    }

    if (query.offset) {

      options.offset = (page - 1) * query.offset;
    }

    if (query.page) {
      const page = parseInt(query.page);
      if (isNaN(page) || page < 1) {
        throw new CustomError('Invalid page number', 440);
      }
      options.offset = (page - 1) * (options.limit || query.limit);
    }


    const plans = await plansModel.findAll(options)

    if (plans === null|| plans.length === 0) {
      throw new CustomError("Plan not found", 404)
    } else {
      return {plans}
    }
  }

  /* Find one Plan */

  async findOne (id) {

    const plan = await plansModel.findOne({
      where: {
        id: id
      }
    })
    const search = await users.findOne({where: { nickName: plan.userNickName }  });
    if (plan === null) {
      throw new CustomError("Plan not found", 404)
    } else {
      return {
        message: "plans",
        data: {
           plan,
           user: search
      }
    }

  }}

  /* Create Plan */

  async create ({ id, title, summary, description, mainImage, images, eventDate, state, userNickName }) {

    eventDate = new Date(eventDate);
    eventDate.setHours(eventDate.getHours() + Math.abs(eventDate.getTimezoneOffset() / 60));

    const searchname = await users.findOne({where: { nickName: userNickName }  });

    const newPlan = await plansModel.create({
      id: id,
      title: title,
      summary: summary,
      description: description,
      mainImage: mainImage,
      images: images,
      eventDate: new Date(eventDate),
      state: state,
      userNickName: userNickName
    })


    const userPlanTable = await sequelize.models.users_votes_plans.create({

      userNickName: userNickName,

      Planid: newPlan.id
    })

    return {
      message: "Create",
      data: {
        newPlan,
        user: searchname,
        userPlanTable: userPlanTable
      }
    };
  }













 /* Create Plan */

 async createComment (id, { userNickName, comment }) {


    const searchname = await users.findOne({where: { nickName: userNickName }  });

    const searchplan = await plansModel.findOne({where: {id: id}});



   const newCom = await  comments.create({

   content: comment

  })
  const commentUserTable = await sequelize.models.comments_users.create({

    userNickName: userNickName,

    commentid: newCom.id
  })

  const commentPlanTable = await sequelize.models.comments_plans.create({

    plansid: id,

    commentid: newCom.id
  })


  return {
    message: "Create",
    data: {
      newCom,
      commentUser: commentUserTable,
      commentPlans: commentPlanTable

    }
  }}
  // const plan = await plansModel.findOne({
  //   where: {
  //     id: id
  //   }
  // })

  // if (plan === null) {
  //   throw new CustomError("Plan not found", 404)
  // }

  // plan.comment += comment


  // await plan.save()

  // return plan;



  // const userPlanTable = await sequelize.models.users_commemt_plans.create({

  //   userNickName: userNickName,

  //   Planid: newPlan.id
  // })





  // return {
  //   message: "Create",
  //   data: {
  //     newPlan,
  //     user: searchname,
  //     userPlanTable: userPlanTable
  //   }
  // };



















  async getComment (id) {



    const getCommentid = await sequelize.models.comments_plans.findAll({where: { plansid: id }  })

    let arrayComment = []

    const getComment = getCommentid.map(async comment => {
      //{where:{id: comment.dataValues.commentid}}
     // await sequelize.models.comments_plans.findAll({where:{id: comment.dataValues.commentid}})
      let data = await sequelize.models.comments_plans.findAll({where:{id: comment.dataValues.commentid}})
      // arrayComment.push(data)
        return [...arrayComment, data]
    })
    console.log(getComment)


    if (getCommentid === null|| getCommentid.length === 0) {
      throw new CustomError("This comment don't exist", 404)
    } else {
      return getCommentid.dataValues.commentid
    }
  }























  /* Update user */

  async update (id, { title, summary, description, mainImage, images, eventDate, state }) {

    const plan = await plansModel.findOne({
      where: {
        id: id
      }
    })
    if (plan === null) {
      throw new CustomError("Plan not found", 404)
    }

    plan.title =  title || plan.title,
    plan.summary =  summary || plan.summary,
    plan.description =  description || plan.description,
    plan.mainImage =  mainImage || plan.mainImage,
    plan.images =  images || plan.images,
    plan.eventDate = eventDate || plan.eventDate,
    plan.state = state || plan.state

    await plan.save()

    return plan;

  }

  /* Update user votes */

  async updateVotes (id, { votes, stars, userNickName }) {

    const plan = await plansModel.findOne({
      where: {
        id: id
      }
    })

    const newPlan = await sequelize.models.users_votes_plans.create({

      userNickName: userNickName,

      Planid: id
    })


    if (plan === null) {
      throw new CustomError("Plan not found", 404)
    }
       plan.votes += votes,
       plan.stars += stars

    await plan.save()

   // return plan;
    return {
      message: "voted",
      data: {
        plan,
        user_and_plan: newPlan
      }
    };

  }



  /* Delete plan */

  async delete (planID) {

    const deletedPlan = await plansModel.destroy({
      where: {
        id: planID
      }
    })

    if (deletedPlan === 0){
      throw new CustomError("Plan not found", 404)
    } else {
      return {
        message: "deleted",
        data: {
          id: planID
        }
      }
    }

  }


  /* Count Pages */
  async count () {
    const options = {};

    const count = await plansModel.count(options);

    return count;
  }


}

module.exports = PlansService;
