import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery = ({ data, LoadMorefn, ShowModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {data.map(el => (
          <GalleryItem el={el} ShowModal={ShowModal} key={el.id} />
        ))}
      </ul>
      <button type="button" onClick={LoadMorefn} className={styles.button}>
        Load more
      </button>
    </>
  );
};

export default Gallery;

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  LoadMorefn: PropTypes.func.isRequired,
  ShowModal: PropTypes.func.isRequired,
};
