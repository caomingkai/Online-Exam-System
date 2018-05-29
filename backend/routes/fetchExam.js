
const config = require('../config/config')
const exams = require('../models/exams')
const random = require('mongoose-simple-random')
const types= config.types
const numbers = config.numbers

function fetchExam(req, res){
    const keyArr = Object.keys(exams)
    let examModelArr = []
    types.forEach(function(index){
        const key = keyArr[index-1]
        examModelArr.push(exams[key])
    })

    let result = { payload: {} }
    let promises = []
    examModelArr.map( (examModel, index)=>{
        const num = numbers[index]
        const aggregate = examModel.aggregate()
        const query = aggregate.sample(num).exec()
        promises.push(query)
    })

    Promise.all(promises).then(function(data){
        data.map((item, index)=>{
            const key = 'section' + (index+1)
            result.payload[key] = item
        })
         console.log(result)
         res.send(result)
    })

}

module.exports = fetchExam
