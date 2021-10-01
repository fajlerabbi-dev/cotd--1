import React, { Component } from 'react';

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  addFishForm = (e) => {
    // stop form from submitting
    e.preventDefault();
    // get all the values from the form and store them into an object
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // pass the object to the main component state (App.js)
    this.props.addFish(fish);
  };

  render() {
    return (
      <form className='fish-edit' onSubmit={this.addFishForm}>
        <input ref={this.nameRef} type='text' name='name' placeholder='name' />
        <input
          ref={this.priceRef}
          type='text'
          name='price'
          placeholder='price'
        />
        <select ref={this.statusRef} type='select' name='status'>
          <option value='available'> Fresh!</option>
          <option value='unavailable'> Sold Out!</option>
        </select>
        <textarea ref={this.descRef} name='desc' placeholder='desc'></textarea>
        <input
          ref={this.imageRef}
          type='text'
          name='image'
          placeholder='image'
        />
        <button>+ Add a fish</button>
      </form>
    );
  }
}
export default AddFishForm;
