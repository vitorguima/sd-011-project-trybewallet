import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import * as userActions from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.converterCurrency = this.converterCurrency.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  converterCurrency(value, currencyExchange) {
    const valueInBRL = value * currencyExchange;
    return valueInBRL;
  }

  sumExpenses() {
    const { expenses } = this.props;

    // Soma os valores de cada despesa adicionada.
    const totalExpense = expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;

      // Cria um array com todas as cotações, e encontra qual a cotação daquela despesa
      const actualCurrency = Object.entries(exchangeRates).find((curren) => (
        curren[0] === currency
      ));
      const price = Number(actualCurrency[1].ask);
      
      // Chama a função que converte o valor naquela cotação para real.
      const valueInBRL = this.converterCurrency(price, value);
      acc += valueInBRL;
      return acc;
    }, 0);
    return totalExpense;
  }

  render() {
    const totalExpense = this.sumExpenses().toFixed(2);
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            R$
            { totalExpense }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <Form />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(userActions.fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.number,
}.isRequired;
