import React from 'react';
import { connect } from 'react-redux'
import Questions from './Questions';
import { withRouter, Link } from 'react-router-dom'

const Section=({ match, questionPayload})=>{

    const targetSectionNum = match.params.sectionNum ?  parseInt(match.params.sectionNum) : 1 ;
    const targetSectionKey = 'section' + targetSectionNum
    const targetQuestionSet = questionPayload[targetSectionKey];

    const sectionTotal = Object.keys(questionPayload).length
    const prevSec = targetSectionNum-1>0 ? (targetSectionNum-1) : 1
    const nextSec = targetSectionNum+1<sectionTotal ? (targetSectionNum+1) : sectionTotal
    return <div>
                <Questions questionArr= {targetQuestionSet}
                           targetType={targetSectionNum} />
                <Link to={'/exam/'+prevSec} > {`<`} </Link> <button> submit </button> <Link to={'/exam/'+nextSec}> {`>`}  </Link>
           </div>
}

const mapStateToProps=(state)=>{
        console.log(state.examData.data);
        return {questionPayload: state.examData.data}
    }


const SectionContainer = withRouter(connect(mapStateToProps)(Section))
export default SectionContainer
