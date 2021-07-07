import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { coins } = this.props;
    console.log(coins);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" name="coin">
            {/* { console.log(coins)} */}
            {/* <option>0</option> */}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method" name="payment-method">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
