import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelForm extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;
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
    this.selectMethod = this.selectMethod.bind(this);
    this.select = this.select.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerClick() {

  }

  selectMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option> Metodo de pagamento! </option>
          <option value="Dinheiro">Dinheiro </option>
          <option value="Cartão de crédito">Cartão de crédito </option>
          <option value="Cartão de débito">Cartão de débito </option>
        </select>
      </label>
    );
  }

  select() {
    const { coins } = this.props;
    const { currency, tag } = this.state;

    return (
      <>
        <label htmlFor="Tag">
          Tag
          <select
            id="Tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
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
    const { getApi } = this.props;
    const { value, description } = this.state;
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
          <input
            type="text"
            id="descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.select()}
        {this.selectMethod()}
        <button type="button" onClick={ () => getApi(true) }>Adicionar despesa</button>
      </form>
    );
  }
}

LabelForm.propTypes = {
  coins: PropTypes.array,
  getApi: PropTypes.func,
  expenses: PropTypes.array,
}.isRequired;
