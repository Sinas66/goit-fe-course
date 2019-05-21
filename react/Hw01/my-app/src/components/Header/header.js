import React from "react";
import styles from "./header.module.css";
import injectSheet from "react-jss";

const inline = {
  logo: {
    backgroundColor: "orange",
    padding: 20,
    fontSize: 40
  }
};

const Header = ({ classes, headerTitle }) => (
  <header className={styles.header}>
    <span className={classes.logo}>{headerTitle}</span>
  </header>
);

const StyleHeader = (() => injectSheet(inline)(Header))();

export default StyleHeader;
