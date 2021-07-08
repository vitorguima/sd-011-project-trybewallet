import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Inputs extends Component {
  render() {
    const { moedas, handleInput } = this.props;
    return (
      <>
        <label htmlFor="Valor">
          Valor:
          <input id="Valor" type="text" name="value" onChange={ handleInput } />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input id="Descrição" type="text" name="description" onChange={ handleInput } />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="currency" onChange={ handleInput }>
            {moedas}
          </select>
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  handleInput: PropTypes.func.isRequired,
  moedas: PropTypes.func.isRequired,
};
