
const UserModel = require('./users')


function createNewUser(req, res){
    console.log(req.body.email);
    return UserModel.create({
        email: req.body.email,
        password: req.body.password
    }, function(err, user){
        if(err){
            console.error(err);
            return res.status(404).json({
                msg: 'Error: back end: usersUtil-function:createNewUser'
            })
        }
        console.log('New user successfully created');
        user.token = user.generateJwt();
        return res.json(user)
    });
}


function validateUser(req, res){
    const email = req.body.email
    const password = req.body.password

    UserModel.findOne({email: email}, function( err, user){
        if( err ){
            console.log(err)
            return res.json({
                status: false,
                message: "Error: backend - usersUtil - validateUser - error in findOne"
            })
        }

        if(!user){
            return res.json({
                status: false,
                message: "Error: backend - usersUtil - validateUser - No such email"
            })
        }

        user.comparePassword( password, function(err, isMatch){
            console.log("password: " + user.password );
            console.log("isMatch: " + isMatch );
            if( err ) {
                console.log(err);
                return res.json({
                    status: false,
                    message: "Error: backend - usersUtil - validateUser - bcrypt error"
                })
            }
            if( !isMatch ){
                return res.json({
                    status: false,
                    message: "Error: backend - usersUtil - validateUser - password mismatch"
                })
            }

            const jwt = user.generateJwt()
            return res.json({
                status: true,
                email: user.email,
                token: jwt
            })
        })
    })
}

module.exports = {
  createNewUser: createNewUser,
  validateUser: validateUser
};
