const { Router } = require('express');
const passport = require('passport')
const AuthService = require('../services/auth.service')
const validatorHandler = require('../middlewares/validator.handler')
const { recoverySchema, loginSchema, changePassSchema } = require('../schemas/auth.schema')

const service = new AuthService()

const router = Router();

/* login */

router.post('/login',
  validatorHandler(loginSchema, "body"),
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {

    try {
      const user = req.user;

      res.json(service.signToken(user))
    } catch (error) {

      next(error)
    }

});

/* login with google*/

router.post('/login/google',
  async (req, res, next) => {

    try {

      res.send("ando")
    } catch (error) {

      next(error)
    }

});

/* recovery pass */

router.post('/recovery',
  validatorHandler(recoverySchema, "body"),
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
  validatorHandler(changePassSchema, "body"),
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
