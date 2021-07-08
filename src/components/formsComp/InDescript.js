import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InDescript extends Component {
  render() {
    const { value, handle } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição:
        <input
          type="text"
          name="description"
          data-testid="description-input"
          id="description-input"
          onChange={ handle }
          value={ value }
        />
      </label>
    );
  }
}

InDescript.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default InDescript;
