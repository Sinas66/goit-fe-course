import React, { Component } from 'react';
// import Reader from './Reader/Reader';
// import data from './publications.json';
// import MoviePage from './MoviePage/MoviePage';
// import movies from './movies.json';
import Bank from './Bank/Dashboard';

class App extends Component {
  state = {};

  render() {
    return (
      // <Reader data={data} />
      // <MoviePage data={movies} />
      <Bank />
    );
  }
}

export default App;
