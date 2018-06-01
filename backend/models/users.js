const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../config/config'); //全局配置

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    token:{
        type: String
    }
}, { collection : 'user' });


UserSchema.pre('save', function(next){
    const user = this
    if(user.isModified('password') || user.isNew ){
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            })
        })
    }else{
        return next();
    }
})


UserSchema.methods.comparePassword = function(passw, cb){
    console.log("parameter(passw): "+passw);
    console.log("this.password: "+this.password);

    bcrypt.compare( passw, this.password, (err, isMatch)=>{
        console.log("1:"+passw);
        console.log("2:"+this.password);
        console.log("3:"+isMatch);
        if(err){
            return cb(err);
        }
        cb(null, isMatch)
    })
}

UserSchema.methods.generateJwt = function(){
    const expire = new Date();
    expire.setDate(expire.getDate() + 7);
    return jwt.sign({
        email: this.email,
        exp: parseInt( expire.getTime() / 1000 ),
    }, config.secret);
}

module.exports = mongoose.model('User', UserSchema);
