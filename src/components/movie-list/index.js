import React, { Component } from "react";
import "./index.css";

function MovieList() {
  let movie = {};
  let value = 0;
  const { movieName, setMovieName } = React.useState(0);
  const handleClick = () => {
    setMovieName(value);
  };
  const handleChange = (event) => {
    value = event.target.value;
  };
  fetch("https://jsonmock.hackerrank.com/api/movies")
    .then((res) => res.join)
    .then((json) => (movie = json));
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          onChange={handleChange}
          data-testid="app-input"
        />
        <button className="" data-testid="submit-button" onClick={handleClick}>
          Search
        </button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        <li className="slide-up-fade-in py-10">{movieName}</li>
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList;
