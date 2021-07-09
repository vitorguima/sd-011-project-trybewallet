import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const reducerExpenses = () => {
      const total = expenses.reduce((acc, { exchangeRates, currency, value }) => (
        acc + (Number(exchangeRates[currency].ask) * Number(value))
      ), 0);
      return total.toFixed(2);
    };
    return (
      <div>
        <h4 data-testid="email-field">{`Email: ${email}`}</h4>
        <h4 data-testid="total-field">{`Despesa Total: R$${reducerExpenses()}`}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};
