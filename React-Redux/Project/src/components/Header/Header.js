import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classes from './Header.module.css';
import { connect } from 'react-redux';
import LoginModal from '../ModalLogin/ModalLogin';

function Header({ isLogShowed }) {
  console.log(isLogShowed);

  return (
    <>
      {isLogShowed.showModal ? <LoginModal /> : null}
      <header>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
      </header>
    </>
  );
}

const mapStateToProps = state => ({
  isLogShowed: state.isModalLoginShowed,
});

Header.propTypes = {
  isLogShowed: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
