import React, { Component } from 'react';

export default class PaymentMethods extends Component {
  render() {
    return (
      <>
        <option selected value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </>
    );
  }
}
