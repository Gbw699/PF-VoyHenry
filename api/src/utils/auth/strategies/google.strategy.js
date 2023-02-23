const { Strategy } = require('passport-google-oauth20');

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = process.env

const GoogleStrategy = new Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/v1/auth/login/google/callback"

  },
  function(accessToken, refreshToken, profile, cb) {
    console.log({
      id: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      image: profile.photos[0].value,
      genre: profile.gender,
      birthday: profile.birthday,
    })
    cb(null, profile)
  }
);

module.exports = GoogleStrategy;
