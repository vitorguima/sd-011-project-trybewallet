import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: {},
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchUnities = this.fetchUnities.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderGenInpt = this.renderGenInpt.bind(this);
  }

  async componentDidMount() {
    this.fetchUnities();
  }

  async fetchUnities() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await fetch(url)
      .then((result) => result.json());
    delete currencies.USDT;
    this.setState(() => ({
      currencies,
    }));
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  handleButton(event) {
    event.preventDefault();
    const { expenseDispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const expense = { id, value, description, currency, method, tag };
    expenseDispatch(expense);
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  createMethods(array) {
    return array.map((term) => <option key={ term }>{ term }</option>);
  }

  totalPrice() {
    const { expenses } = this.props;
    return expenses.length > 0
      ? expenses.reduce((total, expense) => {
        const exchange = expense.exchangeRates[expense.currency].ask;
        const converted = (parseFloat(expense.value) * parseFloat(exchange));
        return total + converted;
      }, 0).toFixed(2)
      : 0;
  }

  renderButton() {
    return (
      <button type="submit" onClick={ this.handleButton }>
        Adicionar despesa
      </button>
    );
  }

  renderGenInpt(type, name, id) {
    return <input type={ type } name={ name } id={ id } onChange={ this.changeState } />;
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const currenciesIds = Object.keys(currencies);

    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">
            { this.totalPrice() }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="inp-val">
            Valor:
            { this.renderGenInpt('number', 'value', 'inp-val') }
          </label>
          <label htmlFor="inp-desc">
            Descrição:
            { this.renderGenInpt('text', 'description', 'inp-desc') }
          </label>
          <label htmlFor="slct-unt">
            Moeda:
            <select name="currency" id="slct-unt" onChange={ this.changeState }>
              {this.createMethods(currenciesIds)}
            </select>
          </label>
          <label htmlFor="slct-mthd">
            Método de pagamento:
            <select name="method" id="slct-mthd" onChange={ this.changeState }>
              {this.createMethods(methods)}
            </select>
          </label>
          <label htmlFor="slct-tag">
            Tag:
            <select name="tag" id="slct-tag" onChange={ this.changeState }>
              {this.createMethods(tags)}
            </select>
          </label>
          { this.renderButton() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (state) => dispatch(fetchCurrency(state)) });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenseDispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
