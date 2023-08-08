import './App.css';
import React from "react";
import Header from "./Header"
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout"
import Signin from "./Signin"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import { useEffect } from 'react';
import Payment from "./Payment"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
 
const promise = loadStripe("pk_test_51NcpIPSAZnhJ4uLdmuXcy34WbFyGTdQpeYyi1PHG9MihQtlFODxqLkgDqJnukqHiDTABskxSbUG0XrjO9mauVKYT00EIjNmsq0");

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('hi')
      console.log("THE USER IS >>>",authUser);
      if(authUser){
        console.log("yes")
        //the user just logged in / the user was logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })},[])

  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/login">
            <h1>LogIn</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          </Switch>
        
        

    </div>
    </Router>

  );
}

export default App;
