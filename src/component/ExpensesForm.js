import React, { Component } from 'react';

export default class ExpensesForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="input-valor">
          Valor:
          <input type="text" id="input-valor" />
        </label>
        <label htmlFor="input-description">
          Descrição:
          <input type="text" id="input-description" />
        </label>
        <label htmlFor="select-currency">
          Moeda:
          <select id="select-currency">
            <option></option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses-type">
          Tag:
          <select id="expenses-type">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
