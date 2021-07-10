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
            <input type="text" name="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select>
              {/* Receberá da api */}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select>
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="payment">
            Tag:
            <select>
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
