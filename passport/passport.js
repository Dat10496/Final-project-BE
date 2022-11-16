require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/User");
const { PORT } = process.env.PORT;

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(async function () {
    await User.findById(user.id).then((user) => cb(null, user));
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `https://sneaker-be.herokuapp.com/v1/auth/google/callback`,
      scope: ["profile"],
    },

    async function verify(accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.find({ googleId: profile.id });

        if (user.length) {
          user = user[0];
          cb(null, user);
        } else {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          };

          user = await User.create(newUser);

          cb(null, user);
        }
      } catch (error) {
        console.log(error, "Login with google error");
      }
    }
  )
);
