import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';

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

  updateFish = (key, updatedFish) => {
    // take a clone of current fish state
    const fishes = { ...this.state.fishes };
    // get specific fish and update with new updatedFish object
    fishes[key] = updatedFish;
    // update the fish object with setState
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
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
