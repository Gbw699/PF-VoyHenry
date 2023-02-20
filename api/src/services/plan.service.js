const plansModel = require('../libs/models/plans.model');
const { CustomError } = require('../middlewares/error.handler');
const { Op } = require("sequelize");
const users = require('../libs/models/users.model.js');


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

    if (query.page) {
      const page = parseInt(query.page);
      console.log(page)
      if (isNaN(page) || page < 1) {
        throw new CustomError('Invalid page number', 440);
      }
      options.offset = (page - 1) * options.limit;
    }

    if (query.state){

      options.where = { state:{ [Op.substring]: query.state }  }
    }

    if (query.contains){

      options.where = { title:{ [Op.substring]: query.contains }  }
    }

    if (query.order) {
      if (query.order === 'alfabetico') {
        options.order = [['title', 'ASC']];
      } else if (query.order === 'reverso') {
        options.order = [['title', 'DESC']];
      } else if (query.order === 'antiguos'){
        options.order = [['eventDate', 'DESC']];
      }
    }

    if (query.limit) {

      options.limit = query.limit;
    }

    if (query.offset) {

      options.offset = (page - 1) * query.offset;
    }

    if (query.date) {

      options.where = { eventDate: { [Op.eq]: `%${query.date}%` } };
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

    return {
      message: "Create",
      data: {
        newPlan,
        user: searchname
      }
    };
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
