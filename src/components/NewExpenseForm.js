import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { submitExpenseAction } from '../actions';

class NewExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyOptions: [],
      newExpense: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const currencyCodes = Object.values(data).map(({ code }) => code);
        this.setState({ currencyOptions: [...new Set(currencyCodes)] });
      });
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState(({ newExpense }) => ({ newExpense: { ...newExpense, [name]: value } }));
  }

  async handleSubmit() {
    const { newExpense } = this.state;
    const { expenses, submitNewExpense } = this.props;

    const apiResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await apiResponse.json();

    const expense = {
      id: expenses.length,
      ...newExpense,
      exchangeRates,
    };

    submitNewExpense(expense);
  }

  renderValueInput() {
    const { newExpense: { value } } = this.state;
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          name="value"
          id="value-input"
          value={ value }
          onChange={ this.handleInputChange }
        />
      </label>);
  }

  renderDescriptionInput() {
    const { newExpense: { description } } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição
        <textarea
          id="description-input"
          name="description"
          value={ description }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  renderCurrencyInput() {
    const { currencyOptions, newExpense: { currency } } = this.state;
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          id="currency-input"
          name="currency"
          value={ currency }
          onChange={ this.handleInputChange }
        >
          {
            currencyOptions.map((currencyCode) => (
              <option key={ currencyCode } value={ currencyCode }>{currencyCode}</option>
            ))
          }
        </select>
      </label>
    );
  }

  renderPaymentMethodInput() {
    const { newExpense: { method } } = this.state;
    return (
      <label htmlFor="método de pagamento">
        Método de pagamento
        <select
          id="método de pagamento"
          name="method"
          value={ method }
          onChange={ this.handleInputChange }
        >
          <option vaue="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>
    );
  }

  renderTagInput() {
    const { newExpense: { tag } } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleInputChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.renderValueInput()}
        {this.renderDescriptionInput()}
        {this.renderCurrencyInput()}
        {this.renderPaymentMethodInput()}
        {this.renderTagInput()}
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

NewExpenseForm.propTypes = {
  submitNewExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  submitNewExpense: (payload) => dispatch(submitExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenseForm);
