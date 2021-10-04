import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import sampleFishes from '../sample-fishes';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
  static propTypes = {
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
  };
  render() {
    return (
      <div className='inventory'>
        <h2>inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
          />
        ))}
        <button onClick={() => this.props.loadSampleFishes(sampleFishes)}>
          load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
