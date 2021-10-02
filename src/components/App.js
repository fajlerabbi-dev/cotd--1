import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends Component {
  static propTypes = {};

  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // take a clone of the current state
    const fishes = { ...this.state.fishes };
    // pushed the new fish into the fish state
    fishes[`fish${Date.now()}`] = fish;
    // update the fishes state with new fish
    this.setState({ fishes });
  };

  loadSampleFishes = (fishes) => {
    // updated the state with the sample fishes
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    // take a clone of the current order state
    const order = { ...this.state.order };
    // add a fish into the order or update the order number
    order[key] = order[key] + 1 || 1;
    // update the order state by setState
    this.setState({ order });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh sea food market' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <div className='order'>
          <h2>order</h2>
        </div>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
