import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { email, walletExpenses } = this.props;

    return (
      <>
        <div>Logo</div>
        <div data-testid="email-field">{ email }</div>
        <p data-testid="total-field">
          { `Despesa total: R$ ${String(
            walletExpenses.reduce((acc, cur) => acc + Number(cur.value), 0).toFixed(2),
          )} `}
        </p>
        <span data-testid="header-currency-field"> BRL</span>
        <ExpensesForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  walletExpenses: state.wallet.expenses,

});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default connect(mapStateToProps)(Wallet);
