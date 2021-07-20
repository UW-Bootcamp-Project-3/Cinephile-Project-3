import React from "react";
import Navigation from "./Navigation";
import NavigationWithAuth from "./NavigationWithAuth";
import { Link } from "react-router-dom";


function Authorization(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <NavigationWithAuth />;
    }
    return <Navigation />;
  };

  export default Authorization;