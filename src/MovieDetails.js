import React, { Component } from "react";
import data from "./data";
import { Route, Switch, Redirect } from "react-router-dom";

class MoviesDetails extends Component {
  render() {
    const movieId = this.props.match.params.movieId;
    const movie = data[movieId - 1];
    if (movie) {
      return (
        <div className="col-6 mx-auto mt-5 pb-5">
          <div className="card ">
            <h3 className="card-header">{movie.name}</h3>
            <img
              className="card-img-top w-50 mx-auto"
              src={movie.image}
              alt={movie.title}
            />
            <div className="card-body">
              <p className="card-text">{movie.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}

export default MoviesDetails;
