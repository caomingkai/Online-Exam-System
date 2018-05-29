const mongoose = require('mongoose')
const Schema = mongoose.Schema
const random = require('mongoose-simple-random')

let examType1Schema = new Schema({
    id:{
        type: String,
        unique: true,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    question:{
        caption: String,
        options: [{type:String}]
    },
    answer: String

},{ collection : 'section1' })


let examType2Schema = new Schema({
    id:{
        type: String,
        unique: true,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    question:{
        caption: {type:String},
        url: {type:String},
        options: [{type:String}]
    },
    answer: String

},{ collection : 'section2' })


let examType3Schema = new Schema({
    id:{
        type: String,
        unique: true,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    question:{
        caption: {type:String},
        url: {type:String},
    },
    answer: String

},{ collection : 'section3' })

examType1Schema.plugin(random)
examType2Schema.plugin(random)
examType3Schema.plugin(random)

const ExamModel1 = mongoose.model('ExamModel1', examType1Schema);
const ExamModel2 = mongoose.model('ExamModel2', examType2Schema);
const ExamModel3 = mongoose.model('ExamModel3', examType3Schema);


module.exports = {
    ExamModel1: ExamModel1,
    ExamModel2: ExamModel2,
    ExamModel3: ExamModel3
}
