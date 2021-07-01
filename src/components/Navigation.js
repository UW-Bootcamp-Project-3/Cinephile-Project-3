import React from 'react';

 function Navigation() {

    return (


<nav className="navbar navbar-expand-lg navbar-light bg-light px-2 font-weight-bold" >
  
  Home
  <button className="navbar-toggler px-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active px-2">
       Movies
      </li>
      <li className="nav-item px-2" >
       Login
      </li>
      <li className="nav-item dropdown px-2" >
          Sign-Up
        
            </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    );

 }
 export default Navigation;