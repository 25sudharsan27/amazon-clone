import React from "react";
import "./Signin.css"
import {useState} from "react";
import {Link} from "react-router-dom"

function Signin(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();

        //some fancy firebase login
    }


    const register =e=>{
        e.preventDefault();
        //firebase register
    }

    return (
        <div className="signin">
            <div className="img">
                <Link to="/">
                <img src="https://github.com/25sudharsan27/amazon-clone/blob/master/src/amazonlogo-removebg-preview.png" alt=""></img>
                </Link>
            </div>
            <div className="signin__container">
                <form className="form">
                <h1 className="signin__text">Sign-in</h1>
                    <h5 className="email">E-mail</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text"/>
                    <h5 value={password} onChange={e=>setPassword(e.target.value)} class="pwd">Password</h5>
                    <input type="password"/>
                    <button onClick={Signin} class="btn"  type="submit" className="signin__signInButton">Sign In</button>
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button onClick={register} className="signin__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}
export default Signin;