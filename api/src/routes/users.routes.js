const { Router } = require('express');
const UsersService = require('../services/user.service');

const router = Router();
const service = new UsersService()

/* Get all users */

router.get('/', async (req, res, next) => {

  try {

    const users = await service.find()

    res.json(users)
  } catch (error) {

    next(error)
  }

});

/* Get user by nickName */

router.get('/:nickName', async (req, res, next) => {

  try {

    const { nickName } = req.params;

    const user = await service.findOne(nickName)

    res.json(user)
  } catch (error) {

    next(error)
  }

});

/* Create new user */

router.post('/', async (req, res, next) => {

  try {

    const body = req.body;

    const createdUser = await service.create(body)

    res.json(createdUser)
  } catch (error) {

    next(error)
  }

});

/* update user info */

router.patch('/:userNickName', async (req, res, next) => {

  try {

    const { userNickName } = req.params
    const body = req.body;

    const updatedUser = await service.update(userNickName, body)

    res.json(updatedUser)
  } catch (error) {
    next(error)
  }

});

/* Delete user */

router.delete('/:userNickName', async (req, res, next) => {

  try {

    const { userNickName } = req.params

    const deletedUser = await service.delete(userNickName)

    res.json(deletedUser)
  } catch (error) {

    next(error)
  }

});

module.exports = router;
