import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import fetch from 'cross-fetch'
import Auth from '../utils/Auth'
import {resolve} from '../actions/actions'

const SignUp = ({history, prompt, dispatch})=>{
    let userInfo = {
        email: "",
        password: ""
    }

    const readEmail = (e)=>{
        userInfo.email = e.target.value;
    }

    const readPassword = (e)=>{
        userInfo.password = e.target.value;
    }

    const submitHandler= (e)=>{
        e.preventDefault();
        if( userInfo.email==="" || userInfo.password==="" ){
            alert("Error: empty value");
            return;
        }

        fetch("http://localhost:3002/auth/signup", {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(
            (res) => res.json()
        ).then(
            (res)=>{
                if( !res.status ) alert(res.message)
                dispatch( resolve(res) )
                Auth.authenticateUser(res.token, res.email)
                if(res.token){
                    console.log(Auth.getToken());
                    history.push('/exam')
                }else{
                    return;
                }

            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    return (
        <div className="container">
            <form className="form-signin" onSubmit={submitHandler} method="POST" >
                <h2 className="form-signin-heading">Sign Up </h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input  type="email" id="inputEmail" className="form-control" onBlur={readEmail} name='email' placeholder="input email" defaultValue="a@123.com" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" onBlur={readPassword} name='password' placeholder="input password" />
                <button className="btn btn-lg btn-primary btn-block" > Signup </button>
            </form>
            <p>{prompt}</p>
        </div>
    )
}

const mapStateToProps = (state)=>({ prompt: state.userData.data.message })
const SignUpContainer = withRouter( connect(mapStateToProps)(SignUp) )
export default SignUpContainer
