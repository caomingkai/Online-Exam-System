const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser')
const config = require('./config/config'); //全局配置
const auth = require('./routes/auth')
const auth_checker = require('./middleware/auth_checker')
const fetchExam = require('./routes/fetchExam')
const sendAnswer = require('./routes/sendAnswer')
const passport = require('passport')
const mongoose = require('mongoose')
mongoose.connect(config.dbURL); // 连接数据库


// Load passport strategies
app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.use('/auth', auth)

app.use('/api', auth_checker)

app.route('/api/exam')
    .get( function(req, res){
        fetchExam(req, res)
    })
    .post(function(req, res){
        sendAnswer(req, res)
    })


// app.get('/payload', function(req, res){
//     let result={'payload':{}}
//     const section1 = db.collection(collection1Name);
//     const section2 = db.collection(collection2Name);
//     const section3 = db.collection(collection3Name);
//     const sections = [section1, section2, section3];
//
//     section1.find({}).toArray(function(err, docs) {
//         result.payload['section1'] = docs;
//         console.log(docs);
//
//         section2.find({}).toArray(function(err, docs) {
//             result.payload['section2'] = docs;
//             section3.find({}).toArray(function(err, docs) {
//                 result.payload['section3'] = docs;
//                 console.log(result.payload.section2);
//
//                 res.send(result)
//             });
//         });
//     });
//
//     // sections.map((sec)=>{
//     //     sec.find({}).toArray(function(err, docs) {
//     //         payload.push(docs)
//     //     });
//     // })
//
//
//
// })

app.listen(3002, function(){
    console.log('app is listening at port 3002');
})
