const { Router } = require('express');
const passport = require('passport')
const { checkRoleClosure } = require('../middlewares/auth.handler')
const UsersService = require('../services/user.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateSchema, getUserSchema } = require('../schemas/users.schema')

const router = Router();
const service = new UsersService()

/* Get all users */

router.get('/', async (req, res, next) => {

  try {

    const users = await service.find(req.query)

    res.json(users)
  } catch (error) {

    next(error)
  }

});

/* Get user by nickName */

router.get('/:nickName',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {

      const { nickName } = req.params;

      const user = await service.findOne(nickName)

      res.json(user)
    } catch (error) {

      next(error)
    }

});

/* Get AllBlogs by nickName */

router.get('/:nickName/blogs',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {

      const page = req.query.page || 1

      const { nickName } = req.params;

      const blogs = await service.findBlogs(nickName ,req.query ,page)

      const count = await service.count(nickName);

      const pages = Math.ceil(count / 3);

      const pageNumber = parseInt(page);

      const response = { blogs, pageNumber, pages }
      res.json(response)
      //res.json(user)
      //res.json(user)
    } catch (error) {

      next(error)
    }

});


/* Get AllPlans by nickName */

router.get('/:nickName/plans',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {

      const { nickName } = req.params;

      const user = await service.findPlans(nickName)

      res.json(user)
    } catch (error) {

      next(error)
    }

});

/* Create new user */

router.post('/',
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {

    try {

      const body = req.body;

      const createdUser = await service.create(body)

      res.json(createdUser)
    } catch (error) {

      next(error)
    }

});

/* update user info */

router.patch('/:nickName',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateSchema, "body"),
  passport.authenticate('jwt', {session: false}),
  checkRoleClosure('nickName'),
  async (req, res, next) => {

    try {

      const { nickName } = req.params
      const body = req.body;

      const updatedUser = await service.update(nickName, body)

      res.json(updatedUser)
    } catch (error) {
      next(error)
    }

});

/* Delete user */

router.delete('/:nickName',
  validatorHandler(getUserSchema, 'params'),
  passport.authenticate('jwt', {session: false}),
  checkRoleClosure('nickName'),
  async (req, res, next) => {

    try {

      const { nickName } = req.params

      const deletedUser = await service.delete(nickName)

      res.json(deletedUser)
    } catch (error) {

      next(error)
    }


/* user follow user */
//router.patch('/:nickName',
router.post('/usee',
  //validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {

    try {

      const {nickName} = req.params
      console.log(nickName)
      const body = req.body;

      const createdUser = await service.follow(nickName,body)

      res.json(createdUser)
    } catch (error) {

      next(error)
    }

});








// Create favorite

router.post(
  '/:nickName/favorite',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id)
      const body = req.body;

      const createdPlan = await service.followblog(id, body);

      res.json(createdPlan);
    } catch (error) {
      next(error);
    }
  }
);




































});

module.exports = router;
