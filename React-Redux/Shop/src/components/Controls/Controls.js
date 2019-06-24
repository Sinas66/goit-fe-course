import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCart } from '../Cart/cartActions';
import classes from './Controls.module.css';

class Controls extends Component {
  state = {
    counter: 1,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(state => {
      if (state.counter <= 1) {
        return state.counter;
      }
      return { counter: state.counter - 1 };
    });
  };

  onHandleAdd = () => {
    const { add, data } = this.props;
    const newData = { ...data };
    newData.count = this.state.counter;
    add(newData);
  };

  render() {
    const { counter } = this.state;
    // const { add, data } = this.props;

    return (
      <>
        <div className={classes.controlsButtons}>
          <button
            onClick={this.onDecrement}
            type="button"
            className={classes.button}
          >
            -
          </button>
          <span>{counter}</span>
          <button
            onClick={this.onIncrement}
            type="button"
            className={classes.button}
          >
            +
          </button>
        </div>
        <button
          onClick={this.onHandleAdd}
          type="button"
          className={classes.add}
        >
          Add
        </button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addCart(data)),
});

Controls.propTypes = {
  add: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
