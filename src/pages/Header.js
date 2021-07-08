import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, wallet } = this.props;
    const { expenses } = wallet;

    const expensesValues = expenses.map(
      ({ value, currency, exchangeRates }) => value
      * exchangeRates[currency].ask,
    );

    const expensesTotal = expensesValues
      .reduce((acc, curr) => acc + curr, 0).toFixed(2);

    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{expensesTotal}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  wallet,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
