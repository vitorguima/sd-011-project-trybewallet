import React, { Component } from 'react';

class FormDispenses extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="value-coins">
            Moeda
            <select id="value-coins">
              <option value="none">BRL</option>
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-dispenses">
            Tag
            <select id="tag-dispenses">
              <option value="food">Alimentação</option>
              <option value="freetime">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport-healt">Transporte e saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FormDispenses;
