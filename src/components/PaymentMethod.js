import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    return (
      <div>
        <label htmlFor="PaymentMethod">
          Método de pagamento:
          <select id="PaymentMethod">
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default PaymentMethod;
