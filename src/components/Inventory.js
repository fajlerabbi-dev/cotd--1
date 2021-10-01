import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import sampleFishes from '../sample-fishes';

class Inventory extends Component {
  static propTypes = {
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };
  render() {
    return (
      <div className='inventory'>
        <h2>inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={() => this.props.loadSampleFishes(sampleFishes)}>
          load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
