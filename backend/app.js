var express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'NAF';
const collection1 = 'section1';
const collection2 = 'section2';
const collection3 = 'section3';

// let section1Data
// let section2Data
// let section3Data
//

// get all from table: section1
const fetchExamData= function(db, collectionName, callback) {
  const collection = db.collection(collectionName);

  console.log(collection.find({}));
  console.log('-------------------------------------');
  console.log(collection.find({}).toArray((err,docs)=>{console.log(docs);}) );

  collection.find({}).toArray(function(err, docs) {
    // console.log(sectionData)
    callback();
  });
}


// Use connect method to connect to the server
const fetchExams = ()=>{
    let section1Data
    let section2Data
    let section3Data
    MongoClient.connect(url, function(err, client) {

        const db = client.db(dbName);
        // fetchExamData(db, collection1,  function() {
        //     fetchExamData(db, collection2,  function() {
                fetchExamData(db, collection3,  function() {
                    client.close();
                })
        //     })
        // })
    })
    return [section1Data, section2Data, section3Data];
}



var app = express();


app.get('/payload', function(req, res){

    const sectionData= fetchExams();
    // console.log(sectionData)
    res.send('Hello World')
})


app.listen(3002, function(){
    console.log('app is listening at port 3002');
})
