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

});

module.exports = router;
