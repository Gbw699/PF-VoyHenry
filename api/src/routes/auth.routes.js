const { Router } = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const AuthService = require('../services/auth.service')

const service = new AuthService()

const {
  JWT_SECRET
} = process.env

const router = Router();

/* login */

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {

    try {
      const user = req.user;

      const payload = {
        nick: user.nickName,
        role: user.role
      }

      const token = jwt.sign(payload, JWT_SECRET)

      res.json({
        user,
        token
      })
    } catch (error) {

      next(error)
    }

});

/* recovery pass */

router.post('/recovery',
  async (req, res, next) => {
    const { email } = req.body

    try {
    } catch (error) {

      next(error)
    }

});

module.exports = router;
