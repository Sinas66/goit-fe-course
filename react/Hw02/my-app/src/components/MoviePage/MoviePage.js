import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';

class MoviesPage extends Component {
  state = {
    data: this.props.data,
    input: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { input } = this.state;
    if (prevState.input !== input) {
      this.updateList();
    }
  }

  search = e => {
    this.setState({ input: e.target.value });
  };

  updateList = () => {
    const input = new RegExp(this.state.input, 'gi');
    const newData = this.props.data.filter(el => input.test(el.title));

    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar search={this.search} />
        {data.length > 0 ? (
          <MovieGrid data={data} />
        ) : (
          <div>
            <p>No matching results!</p>
          </div>
        )}
      </div>
    );
  }
}

export default MoviesPage;

MoviesPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
