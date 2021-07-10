import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PaymentMethod extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
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

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
