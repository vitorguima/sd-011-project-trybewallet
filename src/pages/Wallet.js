import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies } from '../actions/wallet';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesAPI } = this.props;
    fetchCurrenciesAPI();
  }

  render() {
    const { userEmail, expenses } = this.props;
    const radix = 10;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{`Usuário: ${userEmail}`}</p>
          <p data-testid="total-field">
            {(expenses.length === 0) ? 0
              : expenses.reduce((acc, expense) => (
                acc + (parseInt(expense.value, radix))
                * Object.values(expense.exchangeRates).find((cotacao) => (
                  cotacao.code === expense.currency
                )).ask), 0)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <WalletForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  loading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesAPI: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  fetchCurrenciesAPI: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    currency: PropTypes.string,
    length: PropTypes.func,
    reduce: PropTypes.func,
  }).isRequired,
};
