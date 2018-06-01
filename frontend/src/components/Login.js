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
        <div className="container">
            <div className="form-signin">
                <h2 className="form-signin-heading">Online Exam System</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input  type="email" id="inputEmail" className="form-control" onBlur={readEmail} name='email' placeholder="input email" defaultValue="a@123.com" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" onBlur={readPassword} name='password' placeholder="input password" />
                <button className="btn btn-lg btn-primary btn-block" to="/auth/signup" onClick={()=>{loginHandler(email, password)}}> Login </button>
                <Link target="_blank" className="btn btn-lg btn-primary btn-block" to="/auth/signup" > Sign Up </Link>
                {nextPage}
                <p className="alert-indicator" >{prompt}</p>
            </div>
        </div>
    )
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView)
export default LoginContainer
