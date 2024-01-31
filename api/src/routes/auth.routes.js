const { Router } = require('express');
const passport = require('passport')
const AuthService = require('../services/auth.service')
const validatorHandler = require('../middlewares/validator.handler')
const { recoverySchema, loginSchema, changePassSchema } = require('../schemas/auth.schema');

const service = new AuthService()

const router = Router();

/* login */

router.post('/login',
  passport.authenticate('local', {session: false}),
  validatorHandler(loginSchema, "body"),
  async (req, res, next) => {

    try {
      const user = req.user;

      res.json(service.signToken(user))
    } catch (error) {

      next(error)
    }

});

/* login with google */

router.get('/login/google',
  passport.authenticate('google', { session: false, scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/user.birthday.read',
    'https://www.googleapis.com/auth/user.gender.read'
  ]})
);

/* login with google callback */

router.get('/login/google/callback',
  passport.authenticate('google', { session: false, scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/user.birthday.read',
    'https://www.googleapis.com/auth/user.gender.read'
  ]}),
  async (req, res, next) => {

    try {

      if(req.user === "Bad_validation_method"){
        res.redirect(`https://pf-voy-henry.vercel.app/logIn?error=${req.user}`)
      } else {

        const user = service.signToken(req.user)

        res.redirect(`https://pf-voy-henry.vercel.app/logIn?token=${user.token}
          &nickName=${user.user[0].nickName}
          &email=${user.user[0].email}
          &dateOfBirth=${user.user[0].dateOfBirth}
          &firstName=${user.user[0].firstName}
          &lastName=${user.user[0].lastName}
          &image=${user.user[0].image}
          &role=${user.user[0].role}
          &google=${user.user[0].google}`
        )
      }
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
