import React from 'react';
import {Component} from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Playground from './components/Playground'
import {examFetchBigin, examFetchResolve, examFetchFail, exitExam } from './actions/actions'


class Base extends Component{

    constructor(props){
        super(props);
        this.state ={
            timer: 10000000,
            timeOver: false
        }
        this.interval = null;
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(examFetchBigin());

        fetch("http://localhost:3003/payload")
        .then(function(response) {
            return response.json() }
        ).then(
            res => {
                console.log(res.payload);
                dispatch(examFetchResolve(res.payload));}
        ).catch(
            error=> { dispatch(examFetchFail(error)); }
        )

        // this.interval = setInterval(() => {
        //     let timer = this.state.timer;
        //     if (--timer < 1000) {
        //         this.setState({ timeOver: true });
        //         clearInterval(this.interval);
        //     }
        //     this.setState({
        //         timer: this.state.timer-1000
        //     });
        // }, 1000);
    }

    // componentWillUnmount(){
    //     clearInterval(this.interval);
    // }


    userExitExam=()=>{
        let { dispatch } = this.props;
        dispatch(exitExam());
    }


    render(){
        const { isFetching, didInvalidate, data, isValidUser } = this.props
        console.log(isValidUser);
        const ConditionalRedirect = isValidUser ? "" : <Redirect to="/" />
        let PlaygroundPlaceholder;
        if ( isFetching ) {
            PlaygroundPlaceholder = <div> <div> </div>Loading questions... </div>
        } else {
            if( didInvalidate )
                PlaygroundPlaceholder =  <div> There is an error when fetching exam infomation!! </div>
            else
                PlaygroundPlaceholder =  this.state.timeOver ? < Redirect to="/" /> : < Playground payload = {data} />
        }

        return (
            <div className="base" >
                <div className="caption">
                    <span> NAF </span>
                    <span>Time Remaining:</span><span>{this.state.timer/1000} </span>
                    <button >?</button>
                    <button onClick={this.userExitExam} >Exit Test</button>
                    {ConditionalRedirect}
                </div>
                <div className="container" >
                    {PlaygroundPlaceholder}
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state)=>({
    isFetching: state.examData.isFetching,
    didInvalidate: state.examData.didInvalidate,
    data: state.examData.data,
    isValidUser: state.isValidUser
})

// https://redux.js.org/faq/react-redux#why-dont-i-have-this-props-dispatch-available-in-my-connected-component
// 注意：这里没有传入 mapDispatchToProps 这个函数，
// 那么 dispatch 会由container component传给presentational component，
// 作为它的一个 props

// 但如果 mapDispatchToProps 显示的传入了，presentational component
// 中就没有这个 dispatch props了
// 如果仍然需要这个dispatch prop，那么可以在mapDispatchToProps中与其他函数一起显式的返回
const BaseContainer = connect(mapStateToProps)(Base)
export default BaseContainer
