import './App.css';
import React from "react";
import Header from "./Header"
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout"
import Signin from "./Signin"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>LogIn</h1>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
