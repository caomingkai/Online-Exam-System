import React from 'react';
import { Link, Redirect , Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {readEmail, readPassword, asynchorousFetchUserDB} from '../actions/actions'


const mapStateToProps = (state)=>{
    return {
        isValidUser: state.isValidUser,
        email: state.email,
        password: state.password,
        prompt: state.userData.data.message
    };
}


const mapDispatchToProps = (dispatch)=>{
    return {
        loginHandler: (email, password)=>{
            dispatch(asynchorousFetchUserDB(email, password));
        },
        readEmail: (e)=>{
            dispatch(readEmail(e.target.value));
        },
        readPassword: (e)=>{
            dispatch(readPassword(e.target.value));
        }
    }
}


const LoginView =({isValidUser, email, password, prompt, readEmail, readPassword, loginHandler})=>{
    const nextPage = isValidUser ?  <Redirect replace={true} to="/exam" /> : " " ;
    return (
        <div>
            <h1>Login Page </h1>
            <label>Email:</label><input  type="text" onBlur={readEmail} name='email' placeholder="input email" defaultValue="a@123.com"/>
            <label>Password:</label><input onBlur={readPassword} name='password' placeholder="input password" />
            <button onClick={()=>{loginHandler(email, password)}}> Login </button>
            {nextPage}
            <Link to="/auth/signup" > Sign Up </Link>
            <Link to="/api/exam" > Enter Exam </Link>

            <p>{prompt}</p>
        </div>
    )
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView)
export default LoginContainer
