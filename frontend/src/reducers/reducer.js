
import {READ_EMAIL_VALUE, READ_PASSWORD_VALUE,
        BEGIN_FETCH, SUCCEED, FAIL,
        EXAM_FETCH_BEGIN, EXAM_FETCH_SUCCEED, EXAM_FETCH_FAIL,
        EXIT_EXAM,
        SET_ANSWEWR,
        ANSWEWR_SEND_BEGIN, ANSWEWR_SEND_SUCCEED, ANSWEWR_SEND_FAIL } from '../actions/actions'


// initial state
let initialState = {
    email: '',
    password: '',
    isValidUser: false,
    userData:{
        isFetching: false,
        didInvalidate: false,
        data:{}
    },
    examData:{
        isFetching: false,
        didInvalidate: false,
        data:{}
    },
    scoreData:{
        isFetching: false,
        isSubmitted: false,
        didInvalidate: false,
        score: 0
    }
};

const setInitialState =(newValue)=>{
    initialState = newValue;
}
const getInitialState = ()=>(initialState)

const reducer =( state=initialState, action )=>{
    const type = action.type;
    const value = action.value;
    const questionId = action.id;
    const questionType = action.questionType;

    switch( type ){
        case READ_EMAIL_VALUE:
            return  Object.assign({}, state, {email: value});
        case READ_PASSWORD_VALUE:
            return  Object.assign({}, state, {password: value});
        case BEGIN_FETCH:
            return { ...state, userData:{...state.userData, isFetching: true}};
        case SUCCEED:{
            console.log(value);
            return { ...state,  isValidUser: value.status, userData:{...state.userData, isFetching: false, data: value}};
        }
        case FAIL:
            return { ...state, userData:{...state.userData, isFetching: false, didInvalidate: true}};
        case EXAM_FETCH_BEGIN:
            return { ...state, examData:{...state.examData, isFetching: true}};
        case EXAM_FETCH_SUCCEED:
            return { ...state, examData:{...state.examData, isFetching: false, data: value}};
        case EXAM_FETCH_FAIL:
            return { ...state, examData:{...state.examData, isFetching: false, didInvalidate: true}};
        case EXIT_EXAM:
            return { ...state, isValidUser: false, email: '', password:''};
        case SET_ANSWEWR:{
            const oldData = state.examData.data;
            const section = 'section' + questionType;
            const oldSection = oldData[section];
            const index = oldSection.findIndex( item=>item.id===questionId );
            const newItem = {...oldSection[index], answer: value}
            const newSection = [ ...oldSection.slice(0, index), newItem, ...oldSection.slice(index+1) ];
            const newdata = { ...oldData, [section]: newSection}
            return { ...state, examData:{...state.examData, data: newdata}}
        }
        case ANSWEWR_SEND_BEGIN:
            return { ...state, scoreData:{...state.scoreData, isFetching: true}};
        case ANSWEWR_SEND_SUCCEED:
            return { ...state, isValidUser: false, email: '', password:'', scoreData:{...state.scoreData, isFetching: false, isSubmitted: true,  score: value}};
        case ANSWEWR_SEND_FAIL:
            return { ...state, scoreData:{...state.scoreData, isFetching: false, didInvalidate: true}};
        default:
            return state;
    }
}
// const EmailAndPassword =( state=initialState, action )=>{
//     const type = action.type;
//     const value = action.value;
//     switch( type ){
//         case READ_EMAIL_VALUE:
//             return  Object.assign({}, state, {email: value});
//         case READ_PASSWORD_VALUE:
//             return  Object.assign({}, state, {password: value});
//         default:
//             return state;
//     }
// }
//
// const AsynchorousFetchUserDB =( state={...state, userData:{}}, action )=>{
//     const type = action.type;
//     const value = action.value;
//     console.log(state);
//
//     switch( type ){
//         case BEGIN_FETCH:
//             return { ...state, userData:{...state.userData, isFetching: true}};
//         case SUCCEED:
//                     {
//                         const targetUser = value.filter( user => user.email===state.email );
//                         console.log(state.email);
//
//                         const flag = targetUser.length > 0;
//                         console.log(flag);
//
//                         return { ...state,  userData:{...state.userData, isFetching: false, data: value}};
//                     }
//         case FAIL:
//             return { ...state, userData:{...state.userData, isFetching: false, didInvalidate: true}};
//         default:
//             return state;
//     }
// }

// const reducer = combineReducers({ EmailAndPassword, AsynchorousFetchUserDB })


export  {getInitialState, setInitialState, reducer};
