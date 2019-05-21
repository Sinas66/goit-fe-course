import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

class Home extends Component {
  state = {
    booksData: [],
    query: ``,
    genre: ``,
    loader: false,
  };

  // componentDidMount() {
  //   console.log(`mount`);
  // }

  OnSearch = () => {
    const { query, genre } = this.state;
    this.setState({ loader: true });
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}`,
      )
      .then(res => res.data)
      .then(data =>
        data.items
          ? this.setState({ booksData: data.items, loader: false })
          : this.setState({ booksData: [], loader: false }),
      );

    setTimeout(() => {
      console.log(`genre`, this.state.genre);
      console.log(`query`, this.state.query);
      console.log(`booksData`, this.state.booksData);
    }, 1000);
  };

  onInput = e => this.setState({ query: e.target.value });

  onSelect = e => this.setState({ genre: e.target.value });

  render() {
    const { booksData, loader } = this.state;
    return (
      <>
        <SearchForm
          OnSearch={this.OnSearch}
          onInput={this.onInput}
          onSelect={this.onSelect}
        />
        {loader && <Spinner name="circle" />}
        {booksData.length > 0 && <BookList data={booksData} />}
      </>
    );
  }
}

export default Home;
