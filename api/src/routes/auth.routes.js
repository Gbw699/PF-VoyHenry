const { Router } = require('express');
const passport = require('passport')
const AuthService = require('../services/auth.service')

const service = new AuthService()

const router = Router();

/* login */

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {

    try {
      const user = req.user;

      res.json(service.signToken(user))
    } catch (error) {

      next(error)
    }

});

/* recovery pass */

router.post('/recovery',
  async (req, res, next) => {

    try {

      const { email } = req.body

      const message = await service.sendRecovery(email)

      res.json(message)
    } catch (error) {

      next(error)
    }

});

/*  change pass */

router.post('/change-pass',
  async (req, res, next) => {

    try {

      const { token, newPassword } = req.body

      const message = await service.changePassword(token, newPassword)

      res.json(message)
    } catch (error) {

      next(error)
    }

});

module.exports = router;
