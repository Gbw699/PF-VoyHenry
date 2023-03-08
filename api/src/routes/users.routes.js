const { Router } = require('express');
const passport = require('passport')
const { checkRoleClosure } = require('../middlewares/auth.handler')
const UsersService = require('../services/user.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateSchema, getUserSchema, userFollowSchema } = require('../schemas/users.schema')

const router = Router();
const service = new UsersService()

/* Get all users */

router.get('/', 
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {

    try {

      const users = await service.find(req.query)

      res.json(users)
    } catch (error) {

      next(error)
    }

});

/* Get user by nickName */

router.get('/:nickName',
  passport.authenticate('jwt', { session: false }),
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
  passport.authenticate('jwt', { session: false }),
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
    } catch (error) {

      next(error)
    }

});

/* Get AllPlans by nickName */

router.get('/:nickName/plans',
  passport.authenticate('jwt', { session: false }),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateSchema, "body"),
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
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getUserSchema, 'params'),
  checkRoleClosure('nickName'),
  async (req, res, next) => {

    try {

      const { nickName } = req.params

      const deletedUser = await service.delete(nickName)

      res.json(deletedUser)
    } catch (error) {

      next(error)
    }
  });

/* user follow user */

router.post('/:nickName/follow',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(userFollowSchema, 'body'),
    async (req, res, next) => {

      try {

        const {nickName} = req.params

        const body = req.body;

        const userFollowUser = await service.follow(nickName,body)

        res.json(userFollowUser)
      } catch (error) {

        next(error)
      }

});

/* get users followed */

router.get(
  '/:nickName/followed',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const  {nickName}  = req.params;

      const FollowedUsers = await service.getFollowedUsers(nickName);

      res.json(FollowedUsers);
    } catch (error) {
      next(error);
    }
  }
);

/* Get users following */

router.get(
  '/:nickName/Following',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const  { nickName }  = req.params;

      const followingUsers = await service.getUsersFollowing(nickName);

      res.json(followingUsers);
    } catch (error) {
      next(error);
    }
  }
);

/* delete follow user */

router.delete(
  '/:nickName/follow',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(userFollowSchema, 'body'),
  async (req, res, next) => {
    try {

      const { nickName } = req.params

      const body = req.body;

      const deletedFollow = await service.deleteFollowUser(nickName, body);

      res.json(deletedFollow);
    } catch (error) {
      next(error);
    }
  }

);

module.exports = router;
