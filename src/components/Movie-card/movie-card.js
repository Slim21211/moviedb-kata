import React, { Component } from "react";
import "./movie-card.css";

export class MovieCard extends Component {
  render() {
    return (
      <>
        <div className="movie-card">
          <div className="movie-card__poster">
            <img
              src="https://img.freepik.com/free-photo/side-view-hand-pouring-coffee-cup_23-2149703752.jpg?w=996&t=st=1689513458~exp=1689514058~hmac=63423cfd64e52d838919562d5ce46bec0f76799d7159c2ba44aaa23f79f01001"
              alt="poster"
              width={150}
            ></img>
          </div>
          <div className="movie-card__info">
            <h2 className="movie-card__title">The way back</h2>
            <span className="movie-card__date">March 5, 2020</span>
            <div className="movie-card__genre genre">
              <span className="genre__item">Action</span>
              <span className="genre__item">Drama</span>
            </div>
            <p className="movie-card__discription">
              A former basketball all-star, who has lost his wife and family
              foundation in a struggle with addiction attempts to regain his
              soul and salvation by becoming the coach of a disparate ethnically
              mixed high ...
            </p>
          </div>
        </div>
      </>
    );
  }
}
