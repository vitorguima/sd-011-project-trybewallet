import React, { Component } from 'react';

class NewExpenseForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea id="description-input" />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select id="currency-input">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select id="método de pagamento">
            <option vaue="dinheiro">Dinheiro</option>
            <option value="cartão de débito">Cartão de débito</option>
            <option value="cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default NewExpenseForm;
