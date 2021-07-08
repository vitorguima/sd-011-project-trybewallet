import React, { Component } from 'react';

export default class FormExpenses extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descricao
            <input type="text" name="descricão" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option>
                1
              </option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
