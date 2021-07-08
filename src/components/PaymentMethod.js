import React, { Component } from 'react';

export default class PaymentMethod extends Component {
  render() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment">
          <option label="Dinheiro" name="payment">
            Dinheiro
          </option>
          <option label="Cartão de crédito" name="payment">
            Cartão de crédito
          </option>
          <option label="Cartão de débito" name="payment">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}
