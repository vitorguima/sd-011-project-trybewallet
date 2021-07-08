import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies, addExpense } from '../actions';

class ExpenseForm extends PureComponent {
  constructor(props) {
    super(props);

    const { email } = this.props;

    this.state = {
      email,
      value: undefined,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { value, description, currency, method, tag } = this.state;
    const expense = { value, description, currency, method, tag };

    const { addNewExpense, email } = this.props;

    addNewExpense(expense);
    this.setState({
      email,
      value: undefined,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
    });
    event.preventDefault();
  }

  totalPrice() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + (value * exchangeRates[currency].ask)
    ), 0);
  }

  renderSelects() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    const moedas = Object.keys(currencies).filter((item) => item !== 'USDT');
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.handleInput }
            value={ currency }
            id="currency"
            name="currency"
          >
            {moedas.map((currMoeda) => (
              <option key={ currMoeda } value={ currMoeda }>{currMoeda}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            onChange={ this.handleInput }
            value={ method }
            name="method"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleInput } value={ tag } id="tag" name="tag">
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

  render() {
    const { email, value, description } = this.state;
    return (
      <>
        <header>
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <p data-testid="total-field">{`Gastos: ${this.totalPrice().toFixed(2)}`}</p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input
              value={ value }
              type="text"
              id="value"
              name="value"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              value={ description }
              type="text"
              id="description"
              name="description"
              onChange={ this.handleInput }
            />
          </label>
          {this.renderSelects()}
          <button
            type="submit"
            onClick={ (event) => this.handleSubmit(event) }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchCurrencies()),
  addNewExpense: (data) => dispatch(addExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  email: PropTypes.string,
}.isRequired;
