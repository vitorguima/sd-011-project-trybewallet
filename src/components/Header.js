import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../actions';
import * as action from '../actions';
import Expense from './Expense';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      description: 'Sem descrição',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Sem Tag',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
  }

  async handleSubmit(expense) {
    const { addExpense } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    expense.exchangeRates = data;
    addExpense(expense);
  }

  renderFieldMoeda() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" onChange={ (e) => this.handleChange(e) }>
          { arrayCurrencies.map((currency) => (
            <option key={ currency } value={ currency }>
              { currency }
            </option>))}
        </select>
      </label>
    );
  }

  renderFieldMetodo() {
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select
          name="method"
          id="method"
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderFieldTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ (e) => this.handleChange(e) }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderFieldValor() {
    return (
      <label htmlFor="value">
        Valor
        <input
          name="value"
          id="value"
          type="text"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderFieldDescricao() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { expenses } = this.props;
    const lastExpense = expenses[expenses.length - 1];
    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      id: lastExpense ? lastExpense.id + 1 : 0,
    };
    return (
      <div>
        <form>
          { this.renderFieldValor()}
          { this.renderFieldDescricao()}
          { this.renderFieldMoeda()}
          { this.renderFieldMetodo()}
          { this.renderFieldTag()}
        </form>
        <button
          type="button"
          onClick={ () => {
            this.handleSubmit(expense);
          } }
        >
          Adicionar despesa
        </button>
        <Expense />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpense: (expense) => dispatch(action.addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};
