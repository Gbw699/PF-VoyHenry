const { Router } = require('express');
const router = Router()
const MessagesService = require('../services/messages.service')

const messageService = new MessagesService()

router.get('/', (req, res) => {

  res.json("Funciono")

});

module.exports = router;
