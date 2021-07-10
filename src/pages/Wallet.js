import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return sum.toFixed(2);
  }

  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h1 data-testid="email-field">
            { emailUser }
          </h1>
          <h2 data-testid="total-field">{ this.totalExpenses() }</h2>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  emailUser: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
