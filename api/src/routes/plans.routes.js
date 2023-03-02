const { Router } = require('express');
const passport = require('passport')
const PlansService = require('../services/plan.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createPlanSchema, updateSchema, getPlanSchema, deletePlanSchema, ratingSchema, followSchema } = require('../schemas/plans.schema')

const router = Router();
const service = new PlansService();

/* Get all plans */

router.get('/', async (req, res, next) => {

  try {

    const page = req.query.page || 1
    const plans = await service.find(req.query, page)

    let pages = ''

    if (plans.plansInFilter <= 9){
      pages = 1
    } else {
      pages = Math.ceil(plans.plansInFilter / 9);
    }

    const pageNumber = parseInt(page);
    const response = { plans, pageNumber, pages }
    res.json(response)
  } catch (error) {

    next(error)
  }

});

/* Get plan by ID */

router.get('/:id',
  validatorHandler(getPlanSchema, 'params'),
  async (req, res, next) => {
    try {

      const { id } = req.params;

      const plan = await service.findOne(id)

      res.json(plan)
    } catch (error) {

      next(error)
    }

});

/* Create new plan */

router.post('/',
  validatorHandler(createPlanSchema, "body"),
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {

    try {

      const body = req.body;

      const createdPlan = await service.create(body)

      res.json(createdPlan)
    } catch (error) {

      next(error)
    }

});

/* Create new plan comment*/

router.post('/:id/comment',

  async (req, res, next) => {

    try {
      const {id} = req.params
      const body = req.body;

      const createdPlan = await service.createComment(id, body)

      res.json(createdPlan)
    } catch (error) {

      next(error)
    }

});

/* get plan comment*/

router.get('/:id/comment',

  async (req, res, next) => {

    try {
      const {id} = req.params
      //const body = req.body;

      const createdPlan = await service.getComment(id)

      res.json(createdPlan)
    } catch (error) {

      next(error)
    }

});

/* Delete Plan Comment */

router.delete(
  '/comment/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;

      const deletedComment = await service.deleteComment(id);

      res.json(deletedComment);
    } catch (error) {
      next(error);
    }
  }
);

/* update comment content */

router.patch('/comment/:id',

  async (req, res, next) => {

    try {

      const { id } = req.params
      const body = req.body;

      const updatedComment = await service.updateComment(id, body)

      res.json(updatedComment)

    } catch (error) {
      next(error)
    }

});

/* update plan info */

router.patch('/:planID',
  validatorHandler(updateSchema, "body"),
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {

    try {

      const { planID } = req.params
      const body = req.body;

      const updatedPlan = await service.update(planID, body)

      res.json(updatedPlan)
    } catch (error) {
      next(error)
    }

});


/* update plan votes info */

router.patch('/:planID/votes',
  validatorHandler(ratingSchema, "body"),
  async (req, res, next) => {

    try {

      const { planID } = req.params
      const body = req.body;

      const updatedPlan = await service.updateVotes(planID, body)

      res.json(updatedPlan)
    } catch (error) {
      next(error)
    }

});


/* Delete plan */

router.delete('/:id',
  validatorHandler(deletePlanSchema, 'params'),
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {

    try {

      const { id } = req.params

      const deletedPlan = await service.delete(id)

      res.json(deletedPlan)
    } catch (error) {

      next(error)
    }
  });

  /* Create new plan favorite*/

router.post(
  '/:id/favorite',
  validatorHandler(deletePlanSchema, 'params'),
  validatorHandler(followSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const body = req.body;

      const createdPlanFollow = await service.followplan(id, body);

      res.json(createdPlanFollow);
    } catch (error) {
      next(error);
    }
  }
);

/* Get plans favorite */

router.get(
  '/:id/favorite',
  validatorHandler(deletePlanSchema, 'params'),
  async (req, res, next) => {
    try {
      const  {id}  = req.params;

      const createdComment = await service.getFollowPlan(id);

      res.json(createdComment);
    } catch (error) {
      next(error);
    }
  }
);

/* Get user plan favorite */

router.get(
  '/:userNickName/Plansfavorite',
  validatorHandler(followSchema, 'params'),
  async (req, res, next) => {
    try {
      const  { userNickName }  = req.params;

      const followedPlan = await service.getFollowedPlans(userNickName);

      res.json(followedPlan);
    } catch (error) {
      next(error);
    }
  }
);

/* Delete Plan favorite */

router.delete(
  '/:id/favorite',
  validatorHandler(deletePlanSchema, 'params'),
  validatorHandler(followSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const body = req.body;

      const deletedPlan = await service.deleteFavoritePlan(id, body);

      res.json(deletedPlan);
    } catch (error) {
      next(error);
    }
  }
);












module.exports = router;
