const config = require('../config/config')
const PassportLocalStrategy = require('passport-local').Strategy;
const usersUtil = require('../models/usersUtil')

module.exports = new PassportLocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    },
    function(email, password, done){
        const userData = {
          email: email.trim(),
          password: password
        }

        // find a user by email address
        return usersUtil.createNewUser(userData, (err, email, token) => {
            if (err) return done(err);
            return done(null, email, token);
        });
    }
)
