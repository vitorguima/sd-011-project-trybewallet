import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input
            type="number"
            name="Valor"
          />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input
            type="text"
            name="Descrição"
          />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            {}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento:
          <select id="Método de pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="trabalho">Transporte</option>
            <option value="trabalho">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
