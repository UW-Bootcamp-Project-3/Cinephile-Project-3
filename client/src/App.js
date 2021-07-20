import React from "react";
import "./App.css";
// import "bootstrap";
// import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NavigationWithAuth from "./components/NavigationWithAuth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Banner from "../src/images/Banner.gif";
import Movies from "../src/components/Movies";
import Profile from "../src/components/Profile";
import ParticleBackground from "./components/ParticleBackground";

function AuthBtn(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <NavigationWithAuth />;
  }
  return <Navigation />;
};


function App() {
  const {isLoggedIn} = this.state;
  return (
    
    <div>  
      <img src= {Banner} alt="Banner" className="Banner"/>
    <Router>
      <div>
        <AuthBtn isLoggedIn={isLoggedIn} />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <ParticleBackground />

        </div>
      </Router>
    </div>
  );
}

export default App;
