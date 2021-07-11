import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <div data-testid="total-field">
          Total: 0
        </div>
        <div data-testid="header-currency-field">
          Câmbio: BRL
        </div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency">
              {/* Receberá da api */}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" name="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="alimentaçao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
