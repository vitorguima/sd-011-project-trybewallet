import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Valor extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="Valor">
        Valor:
        <input id="Valor" type="number" name="value" onChange={ handleChange } />
      </label>
    );
  }
}

Valor.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
