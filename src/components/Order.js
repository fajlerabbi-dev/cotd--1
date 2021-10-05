import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeOrder: PropTypes.func,
  };

  renderOrder = (key) => {
    const transitionOptions = {
      key,
      classNames: 'order',
      timeout: { enter: 500, exit: 500 },
    };
    // get fish from fish object by the order key
    const fish = this.props.fishes[key];
    // get order count from the order by the key
    const count = this.props.order[key];
    // check availability
    const isAvailable = fish && fish.status === 'available';
    //make sure the fish is loaded
    if (!fish) {
      return;
    }
    // if fish not available then render this
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {fish ? fish.name : 'Fish'} is not available</li>
      );
    }
    // if fish available render all the fish information
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup className='count' component='span'>
              <CSSTransition
                classNames='count'
                key={count}
                timeout={{ enter: 500, exit: 500 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            {fish.name}{' '}
            <button onClick={() => this.props.removeOrder(key)}>×</button>
          </span>
          <span className='price'>{formatPrice(fish.price)}</span>
        </li>
      </CSSTransition>
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
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        // calculate the order with previous value
        return prevTotal + fish.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order'>
        <h2>Order</h2>
        <TransitionGroup component='ul' className='order'>
          {Object.keys(this.props.order).map(this.renderOrder)}
        </TransitionGroup>
        <div className='total'>
          <strong>Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
export default Order;
