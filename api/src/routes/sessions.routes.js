const { Router } = require('express');
const router = Router()
const SessionsService = require('../services/sessions.service')

const sessionService = new SessionsService()

router.get('', async (req, res, next) => {
  try {
    const allSessions = await sessionService.find()

    res.json(allSessions)
  } catch (error) {

    next(error)
  }

});

module.exports = router;
