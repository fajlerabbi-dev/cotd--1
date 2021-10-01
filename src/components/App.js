import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';

class App extends Component {
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

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh sea food market' />
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
