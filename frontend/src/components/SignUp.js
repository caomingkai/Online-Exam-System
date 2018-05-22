import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import fetch from 'cross-fetch'

const SignUp = ({history})=>{

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

        fetch("http://localhost:3002/users", {
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
                console.log(res);
                if(res.status)
                    history.push('/exam/1')
                else{
                    alert("inserted failed");
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
        <div>
            <h1>SignUp Page </h1>
            <form onSubmit={submitHandler} method="POST">
                <label>Email</label>
                <input type="text" onBlur={readEmail} name="email" />
                <label>Password</label>
                <input type="text" onBlur={readPassword} name="password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default withRouter(SignUp)
