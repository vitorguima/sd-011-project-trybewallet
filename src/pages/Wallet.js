import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin, removeDescription } from '../actions';
import Form from './Form';
import Table from './Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { funcCoins } = this.props;
    funcCoins();
  }

  render() {
    const { email, coins, funcCoins, expenses, removeFuncDescription } = this.props;
    const spent = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + (Number((exchangeRates[currency].ask * value)))
    ), 0);
    return (
      <div>
        <div>TrybeWallet</div>
        <header>
          <p><span data-testid="email-field">{ email }</span></p>
          <p><span data-testid="total-field">{ spent || '0'}</span></p>
          <p><span data-testid="header-currency-field">BRL</span></p>
        </header>
        <Form coins={ coins } funcCoins={ funcCoins } expenses={ expenses } />
        <Table expenses={ expenses } removeFuncDescription={ removeFuncDescription } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  funcCoins: (state) => dispatch(fetchCoin(state)),
  removeFuncDescription: (id) => dispatch(removeDescription(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
