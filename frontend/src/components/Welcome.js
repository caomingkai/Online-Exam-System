import React from 'react';
import { Link, Redirect , withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {readEmail, readPassword, asynchorousFetchUserDB} from '../actions/actions'


const mapStateToProps = (state)=>{
    return {
        isValidUser: state.isValidUser,
        email: state.email,
        password: state.password
    };
}


const mapDispatchToProps = (dispatch)=>{
    return {
        loginHandler: ()=>{
            dispatch(asynchorousFetchUserDB());
        },
        readEmail: (e)=>{
            dispatch(readEmail(e.target.value));
        },
        readPassword: (e)=>{
            dispatch(readPassword(e.target.value));
        }
    }
}


const WelcomeView =({isValidUser, email, password, readEmail, readPassword, loginHandler})=>{
    const nextPage = isValidUser ?  <Redirect to="/exam" /> : " " ;
    return (
        <div>
            <h1>Login Page </h1>
            <label>Email:</label><input onBlur={readEmail} name='email' placeholder="input email" value="a@a.com"/>
            <label>Password:</label><input onBlur={readPassword} name='password' placeholder="input password" />
            <button onClick={loginHandler}> Login </button>
            {nextPage}
            <Link to="/signup" > Sign Up </Link>
            <Link to="/exam" > Enter Exam </Link>
        </div>
    )
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomeView)
export default WelcomeContainer
