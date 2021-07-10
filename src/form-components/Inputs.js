import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { value, description, func } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ func }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Inputs;
