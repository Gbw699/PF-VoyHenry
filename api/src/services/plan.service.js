const plansModel = require('../libs/models/plans.model');
const { Op } = require("sequelize");

class PlansService {

  constructor(){

  }

  /* Find all Plans || Filter*/

  async find (query) {

    const options = {

      order: [['eventDate', 'ASC']]
    }
  
    if (query.state){

      options.where = { state:{ [Op.substring]: query.state }  }
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

    const plans = await plansModel.findAll(options)
    return {plans}
  }

  /* Find one Plan */

  async findOne (title) {

    const plan = await plansModel.findAll({
      where: {
        title: title
      }
    })

    if (plan === null) {
      throw new Error("Plan not found")
    }

    return plan

  }

  /* Create Plan */

  async create ({ id, title, summary, description, mainImage, images, eventDate, state }) {

    eventDate = new Date(eventDate);
    eventDate.setHours(eventDate.getHours() + Math.abs(eventDate.getTimezoneOffset() / 60));

    const newPlan = await plansModel.create({
      id: id,
      title: title,
      summary: summary,
      description: description,
      mainImage: mainImage,
      images: images,
      eventDate: new Date(eventDate),
      state: state
    })

    return {
      message: "Create",
      data: {
        newPlan
      }
    };
  }

  /* Update user */

  async update (planTitle, { title, summary, description, mainImage, images, eventDate, state }) {

    const [plan] = await plansModel.findAll({
      where: {
        title: planTitle
      }
    })
    if (plan === null) {
      throw new Error("Plan not found")
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

  async delete (plan) {

    const deletedPlan = await plansModel.destroy({
      where: {
        title: plan
      }
    })

    if (deletedPlan === 0){
      throw new Error("Plan not found")
    } else {
      return {
        message: "deleted",
        data: {
          title: plan
        }
      }
    } 

  }
  
}

module.exports = PlansService;
