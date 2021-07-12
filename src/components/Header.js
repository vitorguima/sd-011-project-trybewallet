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
      valor: '',
      descricao: '',
      moeda: 'USD',
      metodo: '',
      tag: '',
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
    const { addExpense, expenses } = this.props;
    expense.id = expenses.length;
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
      <label htmlFor="moeda">
        Moeda
        <select name="moeda" id="moeda" onChange={ (e) => this.handleChange(e) }>
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
      <label htmlFor="metodo">
        Método de Pagamento
        <select
          name="metodo"
          id="metodo"
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderFieldTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" onChange={ (e) => this.handleChange(e) }>
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  renderFieldValor() {
    return (
      <label htmlFor="valor">
        Valor
        <input
          name="valor"
          id="valor"
          type="number"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderFieldDescricao() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  render() {
    const { valor, descricao, moeda, metodo, tag } = this.state;
    const expense = {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
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
