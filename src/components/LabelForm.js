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
  }

  render() {
    const { coins, getApi } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" name="valor" value={ value } />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" name="descrição" value={ description } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" value={ currency }>
            {coins.map((coin, key) => (
              <option
                key={ key }
                value={ coin }
              >
                { coin }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method }>
            <option> Metodo de pagamento! </option>
            <option value="money">Dinheiro </option>
            <option value="creditCard">Cartão de crédito </option>
            <option value="debitCard">Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag" value={ tag }>
            <option value="food"> Alimentação </option>
            <option> Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
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
