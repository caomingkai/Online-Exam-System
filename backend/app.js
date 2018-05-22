const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const collectionUsersName = 'user';
const collection1Name = 'section1';
const collection2Name = 'section2';
const collection3Name = 'section3';

var db;
MongoClient.connect(url, (err, client) => {
    db = client.db("NAF");
    app.listen(3002, function(){
        console.log('app is listening at port 3002');
    })
})


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.get('/users', function(req, res){
    let result = {}
    const users = db.collection(collectionUsersName);
    users.find({}).toArray(function(err, docs) {
        result['users'] = docs;
        res.send(result)
    })
})

app.post('/users', function(req, res){
    console.log(req.body);
    const users = db.collection(collectionUsersName);
    const newItem = { email: req.body.email, password: req.body.password };
    users.insertOne(newItem, function(err, docs) {
        if (err) {
            res.send({status: false})
            throw err;
        }
        res.send({status: true})
    })
})

app.get('/payload', function(req, res){
    let result={'payload':{}}
    const section1 = db.collection(collection1Name);
    const section2 = db.collection(collection2Name);
    const section3 = db.collection(collection3Name);
    const sections = [section1, section2, section3];

    section1.find({}).toArray(function(err, docs) {
        result.payload['section1'] = docs;
        console.log(docs);

        section2.find({}).toArray(function(err, docs) {
            result.payload['section2'] = docs;
            section3.find({}).toArray(function(err, docs) {
                result.payload['section3'] = docs;
                console.log(result.payload.section2);

                res.send(result)
            });
        });
    });

    // sections.map((sec)=>{
    //     sec.find({}).toArray(function(err, docs) {
    //         payload.push(docs)
    //     });
    // })



})
