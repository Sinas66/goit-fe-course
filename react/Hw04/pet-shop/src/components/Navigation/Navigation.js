import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink
      exact
      to="/"
      className={styles.navLink}
      activeClassName={styles.active}
    >
      Home
    </NavLink>
    <NavLink
      to="/pets"
      className={styles.navLink}
      activeClassName={styles.active}
    >
      Pets
    </NavLink>
    <NavLink
      exact
      to="/about"
      className={styles.navLink}
      activeClassName={styles.active}
    >
      About
    </NavLink>
  </nav>
);

export default Nav;
