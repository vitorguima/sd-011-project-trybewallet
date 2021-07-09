import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newFetchAwesomeApi } from '../actions/walletActions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 0,
      method: 0,
      tag: 0,
      description: '',
    };

    this.getDataUser = this.getDataUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getDataUser(event) {
    const { target } = event;
    this.setState((old) => ({
      ...old,
      [target.name]: target.value,
    }));
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    const expensesLength = expenses.length;
    const stateTwo = {
      id,
      value,
      currency,
      method,
      tag,
      description,
    };
    newExpense(stateTwo);

    if (expensesLength >= 0) {
      this.setState({ id: expensesLength + 1 });
    }
  }

  totalExpenses() {
    let total = 0;
    const { expenses } = this.props;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += exchangeRates[currency].ask * value;
    });

    return total;
  }

  inputText(label) {
    return (
      <label htmlFor={ label === 'Valor' ? 'value' : 'description' }>
        { label }
        <input
          type="text"
          name={ label === 'Valor' ? 'value' : 'description' }
          id={ label === 'Valor' ? 'value' : 'description' }
          onChange={ (event) => this.getDataUser(event) }
        />
      </label>
    );
  }

  inputCurrency() {
    const { denaro } = this.props;
    return (
      <label clasName="labels-form" htmlFor="currencys">
        Moeda
        <select
          clasName="inputs-form"
          id="currencys"
          name="currency"
          onChange={ (event) => this.getDataUser(event) }
        >
          {denaro.map((currencys) => (
            <option
              value={ currencys }
              key={ currencys }
            >
              { currencys }
            </option>
          ))}
        </select>
      </label>
    );
  }

  inputTag() {
    return (
      <label className="labels-form" htmlFor="tag">
        Tag
        <select
          className="inputs-form"
          id="category"
          name="tag"
          onChange={ (event) => this.getDataUser(event) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  inoutMethod() {
    return (
      <label className="labels-form" htmlFor="payment">
        Método de pagamento
        <select
          className="inputs-form"
          id="payment"
          name="payment"
          onChange={ (event) => this.getDataUser(event) }
        >
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <section>
          <h1>Trybe Wallet Exchange</h1>
          <h2 data-testid="email-field">{ user || 'name' }</h2>
          <h2 data-testid="total-field">{ this.totalExpenses() }</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </section>
        <section>
          <form>
            {this.inputText('Valor')}
            {this.inputText('Descrição')}
            {this.inputCurrency()}
            {this.inputMethod()}
            {this.inputTag()}
            <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
          </form>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  monete: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(newFetchAwesomeApi(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
