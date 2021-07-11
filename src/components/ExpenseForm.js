import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'BRL',
      payment: '',
      tag: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <form className="expense-form">
        <label htmlFor="value">
          Valor
          <input
            name="value"
            type="number"
            value={ value }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" value={ currency } onChange={ this.handleInputChange }>
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" value={ payment } onChange={ this.handleInputChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } onChange={ this.handleInputChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            value={ description }
            onChange={ this.handleInputChange }
          />
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}
