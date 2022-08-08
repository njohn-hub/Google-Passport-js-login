const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID = "1004483622938-5dfa0dtgdjaie7fh8ku83gtirpp603kh.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

GITHUB_CLIENT_ID = "2ef4268b0608f7614d14";
GITHUB_CLIENT_SECRET = "b83ee70faf64d28176b1148ef5b1d2540ffccde5";

const passport = require("passport");
const router = require('./Routes/auth');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((user, done) => {
    done(null,user)
})

