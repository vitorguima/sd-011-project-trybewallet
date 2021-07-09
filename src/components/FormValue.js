import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormValue extends Component {
  render() {
    const { handleInputs, value } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

FormValue.propTypes = {
  handleInputs: PropTypes.func,
  value: PropTypes.number,
}.isRequired;
