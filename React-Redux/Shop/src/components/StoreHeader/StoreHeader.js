import React from 'react';
import PropTypes from 'prop-types';
import classes from './StoreHeader.module.css';

const StoreHeader = ({ handleChangeFilter, filter }) => (
  <div>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('all')}
      type="button"
      disabled={filter === 'all'}
    >
      All
    </button>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('onStock')}
      type="button"
      disabled={filter === 'onStock'}
    >
      On Stock
    </button>
    <button
      className={classes.button}
      onClick={() => handleChangeFilter('outOfStock')}
      type="button"
      disabled={filter === 'outOfStock'}
    >
      Out of stock
    </button>
  </div>
);

StoreHeader.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default StoreHeader;
