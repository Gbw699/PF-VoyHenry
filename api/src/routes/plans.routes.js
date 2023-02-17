const { Router } = require('express');
const passport = require('passport')
const PlansService = require('../services/plan.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createPlanSchema, updateSchema, getPlanSchema } = require('../schemas/plans.schema')

const router = Router();
const service = new PlansService();

/* Get all plans */

router.get('/', async (req, res, next) => {

  try {

    const plans = await service.find()

    res.json(plans)
  } catch (error) {

    next(error)
  }

});

/* Get plan by title */

router.get('/:title',
  validatorHandler(getPlanSchema, 'params'),
  async (req, res, next) => {
    try {

      const { title } = req.params;

      const plan = await service.findOne(title)

      res.json(plan)
    } catch (error) {

      next(error)
    }

});

/* Create new plan */

router.post('/',
  /* passport.authenticate('jwt', {session: false}), */
  validatorHandler(createPlanSchema, "body"),
  async (req, res, next) => {

    try {

      const body = req.body;

      const createdPlan = await service.create(body)

      res.json(createdPlan)
    } catch (error) {

      next(error)
    }

});

/* update plan info */

router.patch('/:planTitle',
  validatorHandler(getPlanSchema, 'params'),
  validatorHandler(updateSchema, "body"),
  async (req, res, next) => {

    try {

      const { planTitle } = req.params
      const body = req.body;

      const updatedPlan = await service.update(planTitle, body)

      res.json(updatedPlan)
    } catch (error) {
      next(error)
    }

});

/* Delete plan */

router.delete('/:plan',
  validatorHandler(getPlanSchema, 'params'),
  async (req, res, next) => {

    try {

      const { plan } = req.params

      const deletedPlan = await service.delete(plan)

      res.json(deletedPlan)
    } catch (error) {

      next(error)
    }

});

module.exports = router;
