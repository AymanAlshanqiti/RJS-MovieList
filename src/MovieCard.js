import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="col-lg-2 col-md-6 col-12">
        <div className="card m-3">
          <img className="card-img-top" src={movie.image} alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <Link to={`/movies/${movie.id}/`} className="btn btn-outline-info">
              More Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
