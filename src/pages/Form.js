import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  createSelect() {
    const { coins } = this.props;
    const { currencies, method, tag } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currencies }
            onChange={ this.handleChange }
          >
            {coins.map((coin, index) => (
              <option value={ coin } key={ index }>{coin}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { funcCoins, expenses } = this.props;
    funcCoins(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              id="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {this.createSelect()}
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesas
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.array,
}.isRequired;
