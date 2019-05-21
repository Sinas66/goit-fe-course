import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ data }) => (
  <article className={styles.publication} key={data.id}>
    <h2>{data.title}</h2>
    <p>{data.text}</p>
  </article>
);

export default Publication;

Publication.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
