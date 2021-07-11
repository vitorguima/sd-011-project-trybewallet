import React, { Component } from 'react';

class PaymentType extends Component {
  render() {
    return (
      <label htmlFor="payment-mode">
        Método de pagamento
        <select id="payment-mode">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentType;
