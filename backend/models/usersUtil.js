

const UserModel = require('./users')

function createNewUser(userData, callback){
    UserModel.create({
        email: userData.email,
        password: userData.password
    }, function(err, user){
        if(err){
            console.log('Error: User already existed');
            err.msg = 'Error: User already existed'
            callback(err)
        }
        console.log('New user successfully created');
        const token = user.generateJwt();
        callback(null, user.email, token)
    });
}



function validateUser(userData, callback){
    const email = userData.email
    const password = userData.password

    UserModel.findOne({email: email}, function( err, user){
        if( err ){
            err.message = 'Error: backend - usersUtil - validateUser - error in DB'
            callback(err)
        }

        if(!user){
            let err = {}
            err.message =  "Error: backend - usersUtil - validateUser - No such email"
            callback(err)
        }

        user.comparePassword( password, function(err, isMatch){
            if( err ) {
                let err = {}
                err.message =  "Error: backend - usersUtil - validateUser - bcrypt error"
                callback(err)
            }
            if( !isMatch ){
                let err = {}
                err.message =  "Error: backend - usersUtil - validateUser - password mismatch"
                callback(err)
            }
            const token = user.generateJwt()
            callback(null, user.email, token)
        })
    })
}

module.exports = {
  createNewUser: createNewUser,
  validateUser: validateUser
};
