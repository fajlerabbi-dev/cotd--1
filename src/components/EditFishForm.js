import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      image: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
  };

  handleChange = (event) => {
    // take a copy of current state
    const updatedFish = {
      ...this.props.fish,
      [event.target.name]:
        event.target.name === 'price'
          ? parseFloat(event.target.value)
          : event.target.value,
    };
    // pass this updated fish object to the main state
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { name, price, desc, image, status } = this.props.fish;
    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='price'
          placeholder='price'
          value={price}
          onChange={this.handleChange}
        />
        <select
          type='select'
          name='status'
          value={status}
          onChange={this.handleChange}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          placeholder='desc'
          value={desc}
          onChange={this.handleChange}></textarea>
        <input
          type='text'
          name='image'
          placeholder='image'
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.removeFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
