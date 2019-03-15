import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// Data
import movies from "./data";

// Components
import Navbar from "./Navbar";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <Navbar />
        <Switch>
          <Route path="/mylist" component={MyList} />
          <Route
            exact
            path="/movies/:movieId"
            render={props => <MovieDetails {...props} />}
          />
          <Route path="/not-found" render={props => <h1>Not found</h1>} />
          <Route
            exact
            path="/"
            render={props => <MoviesList movies={movies} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
