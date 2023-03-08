const { Router } = require('express');
const passport = require('passport')
const router = Router()
const { checkAdminRole } = require('../middlewares/auth.handler')
const SessionsService = require('../services/sessions.service')

const sessionService = new SessionsService()

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkAdminRole,
  async (req, res, next) => {
    try {
      const allSessions = await sessionService.find()

      res.json(allSessions)
    } catch (error) {

      next(error)
    }

});

module.exports = router;
