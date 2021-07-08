import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies, addExpense, editExpense } from '../actions';

const food = 'Alimentação';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    const { email } = this.props;

    this.state = {
      email,
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: food,
      startEdit: false,
      tags: [food, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.finishEditExpense = this.finishEditExpense.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.editOn = this.editOn.bind(this);
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
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: food,
    });
    event.preventDefault();
  }

  finishEditExpense(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { email, editCurrentExpense, currentExpense: {
      id, exchangeRates,
    } } = this.props;
    const expense = { value, description, currency, method, tag, id, exchangeRates };
    this.setState({
      email,
      value: undefined,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: food,
      startEdit: false,
    }, () => editCurrentExpense(expense));
  }

  editOn() {
    const { edit, currentExpense } = this.props;
    const { startEdit } = this.state;
    if (edit && !startEdit) {
      this.setState({
        ...currentExpense,
        startEdit: true,
      });
    }
  }

  totalPrice() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + (value * exchangeRates[currency].ask)
    ), 0);
  }

  renderSelects() {
    const { currency, method, tag, tags } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.handleInput }
            value={ currency }
            id="currency"
            name="currency"
            data-testid="currency-input"
          >
            {currencies.map((moeda) => (
              <option key={ moeda } value={ moeda }>{moeda}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            onChange={ this.handleInput }
            value={ method }
            name="method"
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            onChange={ this.handleInput }
            value={ tag }
            id="tag"
            name="tag"
            data-testid="tag-input"
          >
            {tags.map((currTag) => (
              <option key={ currTag } value={ currTag }>{currTag}</option>))}
          </select>
        </label>
      </>
    );
  }

  render() {
    const { email, value, description } = this.state;
    const { edit } = this.props;
    this.editOn();
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
              data-testid="value-input"
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
              data-testid="description-input"
              onChange={ this.handleInput }
            />
          </label>
          {this.renderSelects()}
          {edit
            ? (
              <button type="submit" onClick={ this.finishEditExpense }>
                Editar despesa
              </button>)
            : (
              <button type="submit" onClick={ this.handleSubmit }>
                Adicionar despesa
              </button>)}
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
  currentExpense: state.wallet.currentExpense,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchCurrencies()),
  addNewExpense: (data) => dispatch(addExpense(data)),
  editCurrentExpense: (expense) => dispatch(editExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  email: PropTypes.string,
}.isRequired;
