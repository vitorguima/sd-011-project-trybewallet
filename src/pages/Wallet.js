import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/walletForm';
import { requestCoins } from '../actions';
import ExpenseTable from '../components/expenseTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCoinsList } = this.props;
    requestCoinsList();
  }

  totalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const value = curr.exchangeRates[curr.currency].ask * curr.value;

      acc += value;

      return acc;
    }, 0);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <div data-testid="email-field">
              {`Email: ${userEmail}`}
            </div>
            <div data-testid="total-field">
              { this.totalExpense() }
            </div>
            <div data-testid="header-currency-field">
              BRL
            </div>
          </div>
        </header>
        <main>
          <WalletForm />
          <ExpenseTable />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestCoinsList: () => dispatch(requestCoins()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
  requestCoinsList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
