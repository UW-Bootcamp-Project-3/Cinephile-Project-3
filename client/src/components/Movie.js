import React from "react";

const IMG_API = "http://www.omdbapi.com/?i=tt3896198&apikey=b2132ef4";
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
  </div>
);

export default Movie;
