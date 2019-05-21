import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import styles from './Reader.module.css';
import Publicaion from './Publication/Publication';

class Reader extends Component {
  state = {
    counter: 0,
    data: this.props.data,
  };

  onNext = () => {
    if (this.state.data.length - 1 === this.state.counter) {
      return;
    }

    // this.setState({ counter: this.state.counter + 1 });

    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  onPrev = () => {
    if (this.state.counter <= 0) {
      return;
    }

    // this.setState({ counter: this.state.counter - 1 });
    this.setState(state => ({
      counter: state.counter - 1,
    }));
  };

  render() {
    const { data, counter } = this.state;
    return (
      <section className={styles.reader}>
        <Publicaion data={data[counter]} />

        <Counter length={data.length} counter={counter} />

        <Controls onNext={this.onNext} onPrev={this.onPrev} />
      </section>
    );
  }
}

Reader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Reader;
