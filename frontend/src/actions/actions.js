import fetch from 'cross-fetch'


export const READ_EMAIL_VALUE = 'READ_EMAIL_VALUE'
const readEmail=(value)=>({
    type: READ_EMAIL_VALUE,
    value: value
})


export const READ_PASSWORD_VALUE = 'READ_PASSWORD_VALUE'
const readPassword=(value)=>({
    type: READ_PASSWORD_VALUE,
    value: value
})

export const BEGIN_FETCH = 'BEGIN_FETCH'
const biginFetch=()=>({
    type: BEGIN_FETCH
})

export const SUCCEED = 'SUCCEED'
const resolve=(res)=>({
    type: SUCCEED,
    value: res
})

export const FAIL = 'FAIL'
const reject=(error)=>({
    type: FAIL,
    value: error
})

// Asynchorous action creator
const asynchorousFetchUserDB = ()=>{
    return (dispatch)=>{
        dispatch(biginFetch());
        fetch("http://localhost:3002/users/")
        .then(
            (res) => res.json()
        ).then(
            (res)=>{
                console.log(res);
                return dispatch(resolve(res.users) )
            }
        ).catch(
            (error)=>{
                console.log(error);
                return dispatch(reject(error) )
            }
        )
    }
}

export const EXAM_FETCH_BEGIN = 'EXAM_FETCH_BEGIN'
const examFetchBigin=()=>({
    type: EXAM_FETCH_BEGIN
})

export const EXAM_FETCH_SUCCEED = 'EXAM_FETCH_SUCCEED'
const examFetchResolve=(res)=>({
    type: EXAM_FETCH_SUCCEED,
    value: res
})

export const EXAM_FETCH_FAIL = 'EXAM_FETCH_FAIL'
const examFetchFail=(error)=>({
    type: EXAM_FETCH_FAIL,
    value: error
})

export const EXIT_EXAM = 'EXIT_EXAM'
const exitExam =()=>({
    type: EXIT_EXAM,
})


export const SET_ANSWEWR = 'SET_ANSWEWR'
const setAnswer =(id, questionType, option)=>({
    type: SET_ANSWEWR,
    id: id,
    questionType: questionType,
    value: option
})


export {readEmail, readPassword, asynchorousFetchUserDB, biginFetch, resolve, reject, examFetchBigin, examFetchResolve, examFetchFail, exitExam, setAnswer}
