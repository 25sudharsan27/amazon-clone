import React from "react";
import "./Signin.css"
import {useState} from "react";
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase.js"


function Signin(){
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        console.log({email},{password})
        
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
        //some fancy firebase login
    }


    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it successfully created a new user with email and password
            console.log(auth);
            if (auth){
                history.push("/")
            }
        })
        .catch(error=>alert(error.message))
        //firebase register
    }

    return (
        <div className="signin">
            <div className="img">
                <Link to="/">
                <img src="https://github.com/25sudharsan27/amazon-clone/blob/8425d8209f2779537ad3a2348ace9db3398975a9/src/amazonlogo-removebg-preview.png?raw=true" alt=""></img>
                </Link>
            </div>
            <div className="signin__container">
                <form className="form">
                <h1 className="signin__text">Sign-in</h1>
                    <h5 className="email">E-mail</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text"/>
                    <h5  class="pwd">Password</h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                    <button onClick={signIn} class="btn"  type="submit" className="signin__signInButton">Sign In</button>
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button onClick={register} className="signin__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}
export default Signin;