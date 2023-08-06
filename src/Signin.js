import React from "react";
import "./Signin.css"


function Signin(){
    return (
        <div className="signin">
            <div className="img">
                <img src="https://github.com/25sudharsan27/amazon-clone/blob/master/src/amazonlogo-removebg-preview.png" alt=""></img>
            </div>
            <div className="signin__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="signin__signInButton">Sign In</button>
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button className="signin__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}
export default Signin;