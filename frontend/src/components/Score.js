import React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Score =({score})=>{
    return(
        <div >
            <div>
                Your Score is: {score}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>(
    {score: state.scoreData.score}
)

const ScoreContainer = withRouter(connect(mapStateToProps)(Score))
export default ScoreContainer
