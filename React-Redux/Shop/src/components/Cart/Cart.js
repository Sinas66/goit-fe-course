import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Cart.module.css';

class Cart extends Component {
  state = {
    login: `ASAsAS`,
    password: `ASDASDSAD`,
  };

  render() {
    const { items = [], sum, itemsCount } = this.props;

    return (
      <div>
        <h3>Cart</h3>
        <h5>
          Items: {itemsCount} Sum: {sum}
        </h5>
        <ul className={classes.ul}>
          {items.map(el => (
            <li key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.description}</p>
              {el.count > 1 ? (
                <p>
                  Items {el.count}/ {el.cost}/ sum: $
                  {(el.cost * el.count).toFixed(2)}
                </p>
              ) : (
                <p>$ {el.cost}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  sum: state.cart.sum,
  itemsCount: state.cart.itemsCount,
});

// const a = b => ({
//   abrakadabra: data => b(addNote(data)),
// });

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sum: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Cart);
