import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toogleModalLogin } from '../../components/ModalLogin/ModalLoginActions';

function Home({ toogleLogin }) {
  return (
    <div>
      <button type="button" onClick={toogleLogin}>
        asd
      </button>
    </div>
  );
}

Home.propTypes = {};

const dispatchToProp = dispatch => ({
  toogleLogin() {
    dispatch(toogleModalLogin());
  },
});

export default connect(
  null,
  dispatchToProp,
)(Home);
