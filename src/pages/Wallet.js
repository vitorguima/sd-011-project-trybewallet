import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { getCoins } from '../actions';
import Table from './Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApiCoins } = this.props;
    fetchApiCoins();
  }

  render() {
    const { email, coins, expenses } = this.props;
    const soma = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + (Number(exchangeRates[currency].ask * value))), 0);
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <h4 data-testid="email-field">{`Bem vindo: ${email}`}</h4>
          <h4 data-testid="total-field">{ soma || '0' }</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <section className="form">
          <Form coins={ coins } />
        </section>
        <Table />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  coins: PropTypes.array,
  expences: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiCoins: () => dispatch(getCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
