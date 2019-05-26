import React, { Component } from 'react';
import PetItem from './PetsItem/PetsItem';
import petsList from '../pets.json';
import styles from './Pets.module.css';

class Pets extends Component {
  state = {
    data: petsList,
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Available Pets</h1>
        <section className={styles.wrapper}>
          {data.map(el => (
            <PetItem data={el} key={el.id} />
          ))}
        </section>
        {/* <Link to={`/pets/${data.id}`}>Books</Link> */}
      </>
    );
  }
}

export default Pets;
