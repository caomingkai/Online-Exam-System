const express = require('express');
const router = express.Router();
const usersUtil = require('../models/usersUtil')
const createNewUser = usersUtil.createNewUser;
const validateUser = usersUtil.validateUser;
const passport = require('passport')
var localSignupStrategy = require('../passport/signup_passport');
var localLoginStrategy = require('../passport/login_passport');

// router.post('/login', function(req, res){
//     validateUser(req, res)
// })

router.post('/login', function(req, res, next){
    return passport.authenticate('local-login', function(err, email, token){
        if( err ){
            return res.status(400).json({
            status: false,
            message: err.message
            })
        }
        return res.json({
          status: true,
          email: email,
          token: token
        })
    })(req, res, next)
})


router.post('/signup', function(req, res, next){
    return passport.authenticate('local-signup', function(err, email, token){
        if( err ){
            return res.status(400).json({
            status: false,
            message: err.message
            })
        }
        return res.json({
          status: true,
          email: email,
          token: token
        })
    })(req, res, next)
})


module.exports = router
