const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../config/config.js');

// module.exports = (req, res, next) => {
//   console.log('auth_checker: req: ' + req.headers);
//
//   if (!req.headers.authorization) {
//     return res.status(401).end();
//   }
//
//   // get the last part from a authorization header string like "bearer token-value"
//   const token = req.headers.authorization.split(' ')[1];
//
//   console.log('auth_checker: token: ' + token);
//
//   // decode the token using a secret key-phrase
//   return jwt.verify(token, config.jwtSecret, (err, decoded) => {
//     // the 401 code is for unauthorized status
//     if (err) { return res.status(401).end(); }
//
//     const email = decoded.sub;
//
//     // check if a user exists
//     return User.findById(email, (userErr, user) => {
//       if (userErr || !user) {
//         return res.status(401).end();
//       }
//
//       return next();
//     });
//   });
// };


module.exports = function auth_checker( req, res, next ){

    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];
    console.log('auth_checker: token: ' + token);

    return jwt.verify(token, config.secret, (err, decoded) => {
        // the 401 code is for unauthorized status
        if (err) { return res.status(401).end(); }
        console.log(decoded);
        const email = decoded.email;
        // check if a user exists
        return User.find({email}, (userErr, user) => {
            if (userErr || !user) {
                    return res.status(401).end();
            }
            return next();
        });
    });
}
