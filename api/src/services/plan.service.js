const plansModel = require('../libs/models/plans.model');

class PlansService {

  constructor(){

  }

  /* Find all Plans || Filter*/

  async find (query) {
  
    if (query.state == 'en planeacion') {
      const plans = await plansModel.findAll({
        where: {
          state: 'En planeacion'
        },
        order: [['eventDate', 'ASC']]
      })

      return {plans}

    } else if (query.state == 'en progreso'){
      const plans = await plansModel.findAll({
        where: {
          state: 'En progreso'
        },
        order: [['eventDate', 'ASC']]
      })

      return {plans}

    } else if (query.state == 'finalizado'){
      const plans = await plansModel.findAll({
        where: {
          state: 'Finalizado'
        }
      })

      return {plans}

    } else if (query.order == 'alphabetical'){
      const plans = await plansModel.findAll({
        order: [['title', 'ASC']]
      })

      return {plans}

    } else if (query.order == 'reverse'){
      const plans = await plansModel.findAll({
        order: [['title', 'DESC']]
      })

      return {plans}

    } else {

      const plans = await plansModel.findAll({
        order: [['eventDate', 'ASC']]
      })
      return {plans}
    }

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
