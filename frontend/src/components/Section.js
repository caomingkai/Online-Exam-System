import React from 'react';
import { connect } from 'react-redux'
import Questions from './Questions';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { asynchorousSendAnswer } from '../actions/actions'

const Section=({ match, questionPayload, submitAnswer, submitted})=>{

    const targetSectionNum = match.params.sectionNum ?  parseInt(match.params.sectionNum) : 1 ;
    const targetSectionKey = 'section' + targetSectionNum
    const targetQuestionSet = questionPayload[targetSectionKey];

    // const sectionTotal = Object.keys(questionPayload).length
    // const prevSec = targetSectionNum-1>0 ? (targetSectionNum-1) : 1
    // const nextSec = targetSectionNum+1<sectionTotal ? (targetSectionNum+1) : sectionTotal

    const RedirectPlaceholder = submitted ? <Redirect to='/score' /> : ""
    return <div>
                <Questions questionArr= {targetQuestionSet}
                           targetType={targetSectionNum} />
                <button onClick={()=>{submitAnswer(questionPayload)}}> submit </button>
                { RedirectPlaceholder }
           </div>
}

const mapStateToProps=(state)=>({
    questionPayload: state.examData.data,
    submitted: state.scoreData.isSubmitted
})


const mapDispatchToProps=(dispatch)=>({
    submitAnswer: (questionPayload)=>{
        dispatch(asynchorousSendAnswer(questionPayload))
    }
})

const SectionContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Section))
export default SectionContainer
