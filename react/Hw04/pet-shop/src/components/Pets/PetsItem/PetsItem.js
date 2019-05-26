import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PetsItem.module.css';

const Pets = ({ data }) => (
  <Link to={`/pets/${data.id}`} className={styles.pet_a}>
    <article className={styles.item}>
      <div className={styles.wrapper_img}>
        <img src={data.image} alt="" />
      </div>
      <p>{data.name}</p>
    </article>
  </Link>
);

export default Pets;

Pets.propTypes = {
  data: PropTypes.shape().isRequired,
};
