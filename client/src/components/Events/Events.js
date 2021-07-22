import React from "react";
import "./Events.css";
 
function Events(){
  function attending1(){
    document.querySelector("#rsvp1").style.display = "none";
    document.querySelector("#remove1").style.display = "block";
    document.querySelector("#chat1").style.display = "block";
    var i = 0;
    document.querySelector('#number1').innerHTML = ++i;
  };
  function attending2(){
    document.querySelector("#rsvp2").style.display = "none";
    document.querySelector("#remove2").style.display = "block";
    document.querySelector("#chat2").style.display = "block";
    var i = 0;
    document.querySelector('#number2').innerHTML = ++i;
  };
  function attending3(){
    document.querySelector("#rsvp3").style.display = "none";
    document.querySelector("#remove3").style.display = "block";
    document.querySelector("#chat3").style.display = "block";
    var i = 0;
    document.querySelector('#number3').innerHTML = ++i;
  };
  function decline1(){
    document.querySelector("#rsvp1").style.display = "block";
    document.querySelector("#remove1").style.display = "none";
    document.querySelector("#chat1").style.display = "none";
    var i = document.querySelector('#number1').innerHTML;
    document.querySelector('#number1').innerHTML = --i;
  };
  function decline2(){
    document.querySelector("#rsvp2").style.display = "block";
    document.querySelector("#remove2").style.display = "none";
    document.querySelector("#chat2").style.display = "none";
    var i = document.querySelector('#number2').innerHTML;
    document.querySelector('#number2').innerHTML = --i;
  };
  function decline3(){
    document.querySelector("#rsvp3").style.display = "block";
    document.querySelector("#remove3").style.display = "none";
    document.querySelector("#chat3").style.display = "none";
    var i = document.querySelector('#number3').innerHTML;
    document.querySelector('#number3').innerHTML = --i;
  };

    return(
<div className="card-deck">
<div className="card">
    <img src="/images/zola.jpg" className="card-img-top" alt="Zola movie poster"/>
    <div className="card-body">
      <h5 className="card-title">Zola</h5>
      <p className="card-text">Regal Meridian 4DX</p>
      <p className="card-text">1501 7th Ave., Seattle, WA, 98101</p>
      <p className="card-text">Saturday, July 24 4:15pm</p>
    </div>
    <div className="count">
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <p id="number1" className="card-text">0</p>
    </div>
    <button id="rsvp1" onClick={attending1} className="btn btn-secondary">RSVP!</button>
    <button id="remove1" onClick={decline1} className="btn btn-outline-dark" style={{display: 'none'}}>I can no longer attend</button>
    <button id="chat1" className="btn btn-warning" style={{display: 'none'}}>Chat with other attendees</button>
    <div className="card-footer">
      <small className="text-muted">Rated R</small>
    </div>
  </div>
  <div className="card">
    <img src="/images/fast9.jpg" className="card-img-top" alt="F9 The Fast Saga movie poster"/>
    <div className="card-body">
      <h5 className="card-title">F9 The Fast Saga</h5>
      <p className="card-text">AMC Pacific Place 11</p>
      <p className="card-text">600 Pine St #400, Seattle, WA 98101</p>
      <p className="card-text">Friday, July 26th 9:30pm</p>
    </div>
    <div className="count">
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <p id="number2" className="card-text">0</p>
    </div>
    <button onClick={attending2} id="rsvp2" className="btn btn-secondary">RSVP!</button>
    <button onClick={decline2} id="remove2" className="btn btn-outline-dark" style={{display: 'none'}}>I can no longer attend</button>
    <button id="chat2" className="btn btn-warning"style={{display: 'none'}}>Chat with other attendees</button>
    <div className="card-footer">
      <small className="text-muted">Rated PG-13</small>
    </div>
  </div>
  <div className="card">
    <img src="/images/theGreenKnight.jpg" className="card-img-top" alt="The Green Knight movie poster"/>
    <div className="card-body">
      <h5 className="card-title">The Green Knight</h5>
      <p className="card-text">AMC Seattle 10</p>
      <p className="card-text">4500 9th Ave NE, Seattle, WA 98105</p>
      <p className="card-text">Saturday, July 30th 7:00pm</p>
    </div>
    <div className="count">
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <p id="number3" className="card-text">0</p>
    </div>
    <button onClick={attending3} id="rsvp3" className="btn btn-secondary">RSVP!</button>
    <button onClick={decline3} id="remove3" className="btn btn-outline-dark" style={{display: 'none'}}>I can no longer attend</button>
    <button id="chat3" className="btn btn-warning" style={{display: 'none'}}>Chat with other attendees</button>
    <div className="card-footer">
      <small className="text-muted">Rated R</small>
    </div>
  </div>
</div>
    )
};

export default Events;