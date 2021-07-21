import React from "react";
import "./Events.css";
 
function Events(){
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
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <button className="btn btn-warning">RSVP</button>
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
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <button className="btn btn-warning">RSVP</button>
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
    <img alt="icon" src="/images/people-fill.svg" className="bi bi-people-fill"></img>
    <button className="btn btn-warning">RSVP</button>
    <div className="card-footer">
      <small className="text-muted">Rated R</small>
    </div>
  </div>
</div>
    )
};

export default Events;