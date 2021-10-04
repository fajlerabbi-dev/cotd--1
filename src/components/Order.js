import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
  };

  renderOrder = (key) => {
    // get fish from fish object by the order key
    const fish = this.props.fishes[key];
    // get order count from the order by the key
    const count = this.props.order[key];
    // check availability
    const isAvailable = fish.status === 'available';
    // if fish not available then render this
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {fish ? fish.name : 'Fish'} is not available</li>
      );
    }
    // if fish available render all the fish information
    return (
      <li key={key}>
        <span>
          <span className='count'>
            <span>{count}</span>
          </span>
          {fish.name} <button>×</button>
        </span>
        <span className='price'>{formatPrice(fish.price)}</span>
      </li>
    );
  };

  render() {
    // loop over the order state to get total
    const total = Object.keys(this.props.order).reduce((prevTotal, key) => {
      // get fish from fish object by the order key
      const fish = this.props.fishes[key];
      // get order count from the order by the key
      const count = this.props.order[key];
      // check availability
      if (fish.status === 'available') {
        // calculate the order with previous value
        return prevTotal + fish.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order'>
        <h2>Order</h2>
        <ul className='order'>
          {Object.keys(this.props.order).map(this.renderOrder)}
        </ul>
        <div className='total'>
          <strong>Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
export default Order;
