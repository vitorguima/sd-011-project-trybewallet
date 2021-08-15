import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { submitEdit } from '../actions/index';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      tag: 'Lazer',
      payment: 'Cartão de crédito',
      exchangeRates: {},
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  async componentDidMount() {
    this.changeStatesToEdit();
  }

  changeStatesToEdit() {
    const { expenses, idToEdit } = this.props;
    const expenseToEdit = expenses.find(({ id }) => id === parseInt(idToEdit, 10));
    const {
      id,
      value,
      description,
      currency,
      tag,
      payment,
      exchangeRates,
    } = expenseToEdit;

    this.setState(() => ({
      id,
      value,
      exchangeRates,
      description,
      currency,
      tag,
      payment,
    }));
  }

  editButton() {
    return (
      <button
        type="button"
        onClick={ () => this.handleEdit() }
        data-testid="edit-btn"
      >
        Editar Despesa
      </button>
    );
  }

  handleEdit() {
    const { dispatchEdit, expenses } = this.props;
    const {
      id,
      value,
      description,
      currency,
      tag,
      payment,
      exchangeRates,
    } = this.state;
    const editedExpense = { id,
      value,
      description,
      currency,
      tag,
      method: payment,
      exchangeRates,
    };
    const filteredExpenses = expenses
      .filter((expense) => expense.id !== parseInt(editedExpense.id, 10));
    const editedExpenses = [editedExpense, ...filteredExpenses];

    dispatchEdit(editedExpenses);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  renderCurrencyOptions() {
    const { exchangeRates } = this.state;
    return (
      Object.keys(exchangeRates).map((currency) => (
        <option
          key={ currency }
          value={ currency }
        >
          { currency }
        </option>))
    );
  }

  renderSelects(currency, payment) {
    const { exchangeRates } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {exchangeRates ? this.renderCurrencyOptions() : null}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            data-testid="method-input"
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
            data-testid="value-input"
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
            data-testid="description-input"
          />
        </label>
        {this.renderSelects(currency, payment)}
      </>
    );
  }

  render() {
    const { value, description, currency, tag, payment } = this.state;

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
            data-testid="tag-input"
          >
            <option defaultValue="eating">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {this.editButton()}
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
  dispatchEdit: (editedExpenses) => dispatch(submitEdit(editedExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

EditForm.propTypes = {
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
