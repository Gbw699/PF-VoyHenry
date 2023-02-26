const { Strategy } = require('passport-google-oauth20');
const UsersService = require('../../../services/user.service')

const userService = new UsersService()

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = process.env

const GoogleStrategy = new Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://voyhenry.fly.dev/api/v1/auth/login/google/callback"

  },
  async function(accessToken, refreshToken, profile, cb) {
    try {

      const user = await userService.createWithGoogle({
        nickName: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        genre: profile.gender || null,
        dateOfBirth: profile.birthday || "2000-01-01",
      })
      cb(null, user)
    } catch (error) {
      const redirectError = "Bad_validation_method"
      cb(null, redirectError)
  }}
);

module.exports = GoogleStrategy;
