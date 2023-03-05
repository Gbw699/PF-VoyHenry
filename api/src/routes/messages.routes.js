const { Router } = require('express');
const router = Router()
const MessagesService = require('../services/messages.service')

const messageService = new MessagesService()

router.post('/', async (req, res, next) => {
  try {

    const chat = await messageService.create(req.body)
    res.json(chat)
  } catch (error) {

    next(error)
  }

});

module.exports = router;
