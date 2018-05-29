const config = require('../config/config')
const answers = require('../models/answers')
const mongoose = require('mongoose')
mongoose.set('debug', true);

function sendAnswer(req, res){
    const examData = req.body
    let score = 0
    let examAnswerArr = []
    let Info = []
    let promises = []

    Object.keys(examData).map( (sectionKey)=>{
        const id = parseInt(sectionKey.substring(7))
        const answerkey = 'AnswerModel' + id
        const AnswerModel = answers[answerkey]

        examData[sectionKey].forEach((item)=>{
            examAnswerArr.push(item.answer)
            let query = {id: item.id, type: item.type }
            const promise = AnswerModel.find(query).exec();
            promises.push(promise)
        })

    })

    console.log("======"+promises);
    Promise.all(promises)
    .then( docs=>{
                examAnswerArr.map( (item, index)=>{
                    if( item === docs[index][0].answer) score += docs[index][0].score
                })
                res.send({
                    score: score,
                    status: true
                })
            }
    )
    .catch(err=>{
        console.log(err);
        res.send({
            err: "Error in processing DB ",
            status: false
        })
    })

}

module.exports = sendAnswer
