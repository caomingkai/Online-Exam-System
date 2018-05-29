const mongoose = require('mongoose')
const Schema = mongoose.Schema

let answer1Schema = new Schema({
    id:{
        type: Number,
        unique: true,
        require: true
    },
    type:{
        type: Number,
        require: true
    },
    score:{
        type: Number,
        require: true
    },
    answer: String

},{ collection : 'answer1' })


let answer2Schema = new Schema({
    id:{
        type: Number,
        unique: true,
        require: true
    },
    type:{
        type: Number,
        require: true
    },
    score:{
        type: Number,
        require: true
    },
    answer: String

},{ collection : 'answer2' })


let answer3Schema = new Schema({
    id:{
        type: Number,
        unique: true,
        require: true
    },
    type:{
        type: Number,
        require: true
    },
    score:{
        type: Number,
        require: true
    },
    answer: String

},{ collection : 'answer3' })


const AnswerModel1 = mongoose.model('AnswerModel1', answer1Schema);
const AnswerModel2 = mongoose.model('AnswerModel2', answer2Schema);
const AnswerModel3 = mongoose.model('AnswerModel3', answer3Schema);


module.exports = {
    AnswerModel1: AnswerModel1,
    AnswerModel2: AnswerModel2,
    AnswerModel3: AnswerModel3
}
