import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
    index: PropTypes.string,
    addToOrder: PropTypes.func,
  };
  render() {
    const { name, image, desc, price } = this.props.details;
    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={() => this.props.addToOrder(this.props.index)}>
          Add to order
        </button>
      </li>
    );
  }
}
export default Fish;
