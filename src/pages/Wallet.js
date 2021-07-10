import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Form from '../components/Form';
import './Wallet.css';
// import { AddExpenses, fetchCurrency } from '../actions';

class Wallet extends React.Component {
/*   constructor() {
    super();
    this.state = {
      total: 0,
    };
  } */

  render() {
    const { email } = this.props;

    const getTotal = () => {
      const { expenses } = this.props;
      const total = (expenses.length === 0) ? 0 : expenses
        .reduce((acc, cur) => acc + cur.value * cur.exchangeRates[cur.currency].ask, 0);

      return total.toFixed(2);
    };

    return (
      <>
        <header>
          <p data-testid="email-field">{ `E-mail: ${email}` }</p>
          <p data-testid="total-field">{ `Despesa Total: ${getTotal()}` }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <Form />
        </div>
      </>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Wallet);
