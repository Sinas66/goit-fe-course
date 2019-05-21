import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchFrom/SearchFrom';
import Gallery from './Gallery/Gallery';
import styles from './Images.module.css';
import Modal from './Gallery/Modal/Modal';

class Images extends Component {
  state = {
    input: ``,
    data: [],
    numPages: 1,
    fullImg: ``,
    showOverlay: false,
  };

  componentDidUpdate(a, prevState) {
    const { input } = this.state;
    if (prevState.input !== input) {
      this.getData();
    }
  }

  onInput = e => {
    this.setState({ input: e.target.value, numPages: 1 });
  };

  getData = () => {
    const { input, numPages } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${numPages}&per_page=12&key=12547893-249813f2ee4ff1cbb66bfae11`,
      )
      .then(resp => this.setState({ data: resp.data.hits }));
  };

  LoadMorefn = () => {
    this.setState(state => ({ numPages: state.numPages + 1 }));
    const { input, numPages } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${numPages}&per_page=12&key=12547893-249813f2ee4ff1cbb66bfae11`,
      )
      .then(resp =>
        this.setState(
          state => ({ data: [...state.data, ...resp.data.hits] }),
          () =>
            window.scrollTo({
              top: 100000,
              left: 0,
              behavior: 'smooth',
            }),
        ),
      );
  };

  ShowModal = e => {
    this.setState({ fullImg: e, showOverlay: true });
  };

  hideModal = () => {
    this.setState({ showOverlay: false });
  };

  render() {
    const { data, fullImg, showOverlay } = this.state;
    return (
      <div className={styles.wrapper}>
        <SearchForm onInput={this.onInput} />

        {data.length > 0 ? (
          <Gallery
            data={data}
            LoadMorefn={this.LoadMorefn}
            ShowModal={this.ShowModal}
          />
        ) : null}
        {showOverlay ? (
          <Modal fullImg={fullImg} hideModal={this.hideModal} />
        ) : null}
      </div>
    );
  }
}

export default Images;
