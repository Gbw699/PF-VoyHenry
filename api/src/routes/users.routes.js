const { Router } = require('express');
const UsersService = require('../services/user.service')

const router = Router();
const service = new UsersService()

/* Get all users */

router.get('/', (req, res, next) => {

  try {

    const users = service.find()

    res.json(users)
  } catch (error) {

    next(error)
  }

});

/* Get user by nickName */

router.get('/:nickName', (req, res, next) => {

  try {

    const { nickName } = req.params;

    const user = service.findOne(nickName)

    res.json(user)
  } catch (error) {

    next(error)
  }

});

/* Create new user */

router.post('/', (req, res, next) => {

  try {

    const body = req.body;

    const createdUser = service.create(body)

    res.json(createdUser)
  } catch (error) {

    next(error)
  }

});

/* update user info */

router.patch('/:userNickName', (req, res, next) => {

  try {

    const { userNickName } = req.params
    const body = req.body;

    const updatedUser = service.update(userNickName, body)

    res.json(updatedUser)
  } catch (error) {
    next(error)
  }

});

/* Delete user */

router.delete('/:userNickName', (req, res, next) => {

  try {

    const { userNickName } = req.params

    const deletedUser = service.delete(userNickName)

    res.json(deletedUser)
  } catch (error) {

    next(error)
  }

});

module.exports = router;
