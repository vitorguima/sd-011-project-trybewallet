import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, deleteExpenses, editExpenses } from '../actions';
import LabelForm from '../components/LabelForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  render() {
    const { email, coins, expenses, getApi, deleteItem } = this.props;
    const valor = expenses
      .reduce((acc, { exchangeRates, currency, value }) => (
        acc + (Number(exchangeRates[currency].ask * value))), 0);
    return (
      <>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">
            {' '}
            { valor || '0' }
            {' '}
          </div>
          <div data-testid="header-currency-field"> BRL </div>

        </header>
        <LabelForm coins={ coins } getApi={ getApi } expenses={ expenses } />
        <Table expenses={ expenses } deleteExpenses={ deleteItem } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: (state) => dispatch(fetchApi(state)),
  deleteItem: (id) => dispatch(deleteExpenses(id)),
  editItem: (id) => dispatch(editExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
  coins: PropTypes.array,
  expenses: PropTypes.array,
  getApi: PropTypes.func,
}.isRequired;
