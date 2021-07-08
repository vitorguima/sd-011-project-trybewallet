import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { getApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getApiWallet } = this.props;
    getApiWallet();
  }

  render() {
    const { getUserMail, coins, expenses } = this.props;
    const totalExpenses = expenses
      .map(({ exchangeRates, currency, value }) => (
        Number(exchangeRates[currency].ask) * Number(value)))
      .reduce((acc, cur) => (acc + cur), 0).toFixed(2);
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{ getUserMail }</p>
          <p data-testid="total-field">{totalExpenses}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form coins={ coins } />
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  getUserMail: user.email,
  coins: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getApiWallet: () => dispatch(getApi()),
});

Wallet.propTypes = {
  coins: PropTypes.array,
  getApiWallet: PropTypes.func,
  getUserMail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
