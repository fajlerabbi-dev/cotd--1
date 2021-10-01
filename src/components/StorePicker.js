import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class StorePicker extends Component {
  // PropTypes Verification
  static propTypes = {
    history: PropTypes.object,
  };

  storeNameRef = React.createRef();
  goToStore = (e) => {
    // stop form from submitting
    e.preventDefault();
    // take the input value
    const storeName = this.storeNameRef.current.value;
    // change url the url with store name and redirect to the main store component
    this.props.history.push(`store/${storeName}`);
  };

  render() {
    return (
      <form className='store-selector'>
        <h2>Please enter a store</h2>
        <input
          ref={this.storeNameRef}
          type='text'
          placeholder='Store Name'
          defaultValue={getFunName()}
        />
        <button onClick={this.goToStore}>Visit Store &#8594;</button>
      </form>
    );
  }
}

export default StorePicker;
