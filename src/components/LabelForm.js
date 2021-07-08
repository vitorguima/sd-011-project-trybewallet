import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  select() {
    const { coins } = this.props;
    const { currency, method, tag } = this.state;

    return (
      <>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option> Metodo de pagamento! </option>
            <option value="money">Dinheiro </option>
            <option value="creditCard">Cartão de crédito </option>
            <option value="debitCard">Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select
            id="Tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="food"> Alimentação </option>
            <option> Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" value={ currency } onChange={ this.handleChange }>
            {coins.map((coin, key) => (
              <option
                key={ key }
                value={ coin }
              >
                { coin }
              </option>))}
          </select>
        </label>
      </>
    );
  }

  render() {
    const { coins, getApi } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" name="description" value={ description } onChange={ this.handleChange } />
        </label>

        <button type="button" onClick={ () => getApi(true) }>Adicionar despesa</button>
      </form>
    );
  }
}

LabelForm.propTypes = {
  coins: PropTypes.array,
  getApi: PropTypes.func,
}.isRequired;
