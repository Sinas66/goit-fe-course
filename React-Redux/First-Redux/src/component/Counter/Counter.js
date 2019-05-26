import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { more } from '../../pages/HomePage/countActions';

const Counter = ({ counter, showMore }) => (
  <div>
    <button type="button" onClick={showMore}>
      MORE
    </button>
    <span>{counter}</span>
  </div>
);

const stateToProps = state => ({
  counter: state.counter,
});

const dispatchToProp = dispatch => ({
  showMore() {
    dispatch(more());
  },
});

export default connect(
  stateToProps,
  dispatchToProp,
)(Counter);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  showMore: PropTypes.func.isRequired,
};
