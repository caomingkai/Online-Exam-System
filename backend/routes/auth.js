const express = require('express');
const router = express.Router();
const usersUtil = require('../models/usersUtil')
const createNewUser = usersUtil.createNewUser;
const validateUser = usersUtil.validateUser;


router.post('/login', function(req, res){
    validateUser(req, res)
})

router.post('/signup', function(req, res){
    createNewUser(req, res)
})


module.exports = router
