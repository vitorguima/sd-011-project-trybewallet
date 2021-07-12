import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { totalExpenses } = this.state;
    const { login, sendExp } = this.props;
    totalExpenses = () => {
      if (espenses.length > 0) {
        totalExpenses = expenses.reduce(
          (acc, { currency, value, exchangeRates }) => {
            Object.entries(exchangeRates).find(([key]) => key === currency);
            return (acc + (Number(value) + totalExpenses[1].ask));
          },
        );
      }
    };
    return (
      <header>
        <h4 data-testid="email-field">{login}</h4>
        <h4 data-testid="header-currency-field">
          Despesa Total R$
          <span data-testid="total-field">{totalExpenses}</span>
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  sendExp: state.wallet.expenses,
});

Headers.propTypes = {
  login: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Headers);
