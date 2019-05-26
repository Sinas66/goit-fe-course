import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import petsList from '../pets.json';
import styles from './Pet.module.css';

const Pet = ({ match }) => {
  const pet = petsList.find(el => el.id === match.params.id);

  return (
    <div className={styles.wrapp}>
      <Link to="/pets" className={styles.link}>
        Return
      </Link>

      <h1>All About {pet.name}</h1>
      <section>
        <img src={pet.image} alt="" />
        <p>Age: {pet.age}</p>
        <p>Gender: {pet.gender}</p>
        <p>Color: {pet.color}</p>
        <p>Breed: {pet.breed}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          inventore labore temporibus asperiores qui eveniet hic dicta soluta
          modi odit eum et magnam enim placeat tempora a, ipsa eos ipsam?
        </p>
      </section>
    </div>
  );
};

export default Pet;

Pet.propTypes = {
  match: PropTypes.shape().isRequired,
};
