import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.active}
    >
      Home
    </NavLink>
    <NavLink
      exact
      to="/todo"
      className={styles.link}
      activeClassName={styles.active}
    >
      ToDo
    </NavLink>
    <NavLink
      exact
      to="/slider"
      className={styles.link}
      activeClassName={styles.active}
    >
      Slider
    </NavLink>
    <NavLink
      exact
      to="/shop"
      className={styles.link}
      activeClassName={styles.active}
    >
      Shop
    </NavLink>
  </nav>
);
export default Nav;
