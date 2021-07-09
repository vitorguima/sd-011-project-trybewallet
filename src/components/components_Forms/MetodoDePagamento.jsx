import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MetodoDePagamento extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento:
        <select
          id="Método de pagamento"
          type="text"
          name="method"
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MetodoDePagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
