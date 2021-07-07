import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InValue extends Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          onChange={ handle }
          value={ value }
        />
      </label>
    );
  }
}

InValue.propTypes = {
  value: PropTypes.number.isRequired,
  handle: PropTypes.func.isRequired,
};

export default InValue;
