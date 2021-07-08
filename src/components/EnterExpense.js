import React, { Component } from 'react';

export default class EnterExpense extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" name="value" min="0" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input id="descrição" type="text" name="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="currency">
            <option>-</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento" name="paymentMethod">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
