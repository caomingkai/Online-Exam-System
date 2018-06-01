import fetch from 'cross-fetch'
import Auth from '../utils/Auth'

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
const asynchorousFetchUserDB = (email, password)=>{
    const loginInfo = {
        email: email,
        password: password
    }

    return (dispatch)=>{
        dispatch(biginFetch());
        fetch("http://localhost:3002/auth/login",{
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            res => res.json()
        ).then(
            res=>{
                console.log(res);
                Auth.authenticateUser(res.token, res.email)
                return dispatch(resolve(res) )
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
const examFetchSucceed=(res)=>({
    type: EXAM_FETCH_SUCCEED,
    value: res
})

export const EXAM_FETCH_FAIL = 'EXAM_FETCH_FAIL'
const examFetchFail=(error)=>({
    type: EXAM_FETCH_FAIL,
    value: error
})

export const EXIT_EXAM = 'EXIT_EXAM'
const exitExam =()=>{
    Auth.deAuthenticateUser();
    return {type: EXIT_EXAM}
}

export const SET_ANSWEWR = 'SET_ANSWEWR'
const setAnswer =(id, questionType, option)=>({
    type: SET_ANSWEWR,
    id: id,
    questionType: questionType,
    value: option
})


export const ANSWEWR_SEND_BEGIN = 'ANSWEWR_SEND_BEGIN'
const answerSendBigin=()=>({
    type: ANSWEWR_SEND_BEGIN
})

export const ANSWEWR_SEND_SUCCEED = 'ANSWEWR_SEND_SUCCEED'
const answerSendSucceed =(res)=>{
    Auth.deAuthenticateUser();
    return{
        type: ANSWEWR_SEND_SUCCEED,
        value: res
    }
}

export const ANSWEWR_SEND_FAIL= 'ANSWEWR_SEND_FAIL'
const answerSendFail =(error)=>({
    type: ANSWEWR_SEND_FAIL,
    value: error

})

const asynchorousSendAnswer=(questionPayload)=>{
    console.log(questionPayload);
    return (dispatch)=>{
        dispatch(answerSendBigin());

        fetch("http://localhost:3002/api/exam",{
            method: 'POST',
            body: JSON.stringify(questionPayload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( res=>res.json() )
        .then( res=>{
            console.log(res);
            if( res.status)
                dispatch(answerSendSucceed(res.score) )
            else
                dispatch(answerSendFail({error: res.error}) )
        })
        .catch( error=>{
            console.log(error);
            dispatch(answerSendFail(error) )
        })
    }
}


export {readEmail, readPassword, asynchorousFetchUserDB, biginFetch, resolve, reject, examFetchBigin, examFetchSucceed, examFetchFail, exitExam, setAnswer, asynchorousSendAnswer}
