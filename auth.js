const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./db"); // Import database connection

passport.use(new GoogleStrategy({
  clientID: "YOUR_GOOGLE_CLIENT_ID",
  clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  db.query("INSERT IGNORE INTO users SET ?", { email: profile.emails[0].value, googleId: profile.id }, () => {
    done(null, profile);
  });
}));

module.exports = passport;
