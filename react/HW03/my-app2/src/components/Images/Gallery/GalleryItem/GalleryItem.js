import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({ el, ShowModal }) => {
  return (
    <li className={styles[`gallery-item`]}>
      <img src={el.webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles[`stats-item`]}>
          <i className="material-icons">thumb_up</i>
          {el.likes}
        </p>
        <p className={styles[`stats-item`]}>
          <i className="material-icons">visibility</i>
          {el.views}
        </p>
        <p className={styles[`stats-item`]}>
          <i className="material-icons">comment</i>
          {el.comments}
        </p>
        <p className={styles[`stats-item`]}>
          <i className="material-icons">cloud_download</i>
          {el.downloads}
        </p>
      </div>

      {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
      <button
        type="button"
        className={styles[`fullscreen-button`]}
        onClick={() => ShowModal(el.largeImageURL)}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  el: PropTypes.shape().isRequired,
  ShowModal: PropTypes.func.isRequired,
};
