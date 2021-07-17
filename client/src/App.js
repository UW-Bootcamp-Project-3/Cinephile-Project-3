import React from "react";
import "./App.css";
// import "bootstrap";
// import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Banner from "../src/images/Banner.gif";
import Movie from "../src/components/Movie";

function App() {
  return (
    <div>  
      <img src= {Banner} alt="Banner" className="Banner"/>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
      </div>

    </Router>

  </div>
  );
}

export default App;
