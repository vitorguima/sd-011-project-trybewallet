import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import getCurrency from '../services/Index';

import { dispatchExpense } from '../actions/index';

class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextId: 0,
      value: 0,
      description: '',
      currency: 'USD',
      tag: 'Lazer',
      payment: 'Cartão de crédito',
      currencies: {},
    };

    this.renderForm = this.renderForm.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.handleCurrencies();
  }

  submitButton(expense) {
    return (
      <button
        type="button"
        onClick={ () => this.handleSubmit(expense) }
      >
        Adicionar despesa
      </button>
    );
  }

  handleSubmit(expense) {
    const { dispatchExpenses } = this.props;

    this.setState((state) => ({
      nextId: state.nextId + 1,
    }), () => dispatchExpenses(expense));
  }

  async handleCurrencies() {
    const data = await getCurrency();
    this.setState((state) => ({
      currencies: {
        ...state.currencies,
        ...data,
      },
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  renderCurrencyOptions() {
    const { currencies } = this.state;
    return (
      Object.keys(currencies).filter((c) => c !== 'USDT').map((currency) => (
        <option
          key={ currency }
          value={ currency }
        >
          { currency }
        </option>))
    );
  }

  renderSelects(currency, payment) {
    const { currencies } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies ? this.renderCurrencyOptions() : <option value="brl">BRL</option>}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            id="payment"
            name="payment"
            value={ payment }
            onChange={ this.handleChange }
          >
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
      </>
    );
  }

  renderForm(value, description, currency, payment) {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelects(currency, payment)}
      </>
    );
  }

  render() {
    const { nextId, value, description, currency, tag, payment } = this.state;
    const expense = { nextId, value, description, currency, tag, payment };

    return (
      <form>
        {this.renderForm(value, description, currency, payment)}
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option defaultValue="eating">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {this.submitButton(expense)}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (expense) => dispatch(dispatchExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);

SubmitForm.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.shape({
        ask: PropTypes.string,
        bid: PropTypes.string,
        code: PropTypes.string,
        codein: PropTypes.string,
        create_date: PropTypes.string,
        high: PropTypes.string,
        low: PropTypes.string,
        name: PropTypes.string,
        pctChange: PropTypes.string,
        timestamp: PropTypes.string,
        varBid: PropTypes.string,
      }).isRequired,
    }),
  ),
  dispatchEpenses: PropTypes.func,
}.isRequired;
