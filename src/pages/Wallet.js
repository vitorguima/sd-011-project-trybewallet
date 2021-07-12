import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Table from './Table';
import { newExpenseAction } from '../actions';
import EditExpense from './EditExpense';

class Wallet extends React.Component {
  render() {
    const { email, expenses, editMenu } = this.props;
    const total = expenses.length > 0
      ? expenses
        .reduce(
          (acc, curr) => acc + curr.value * curr.exchangeRates[curr.currency].ask,
          0,
        )
        .toFixed(2)
      : 0;
    const myStyleHeader = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#FF9E00',
      backgroundColor: '#240046',
    };

    const myStyleMain = {
      color: '#FF9E00',
      width: '100%',
      backgroundColor: '#3C096C',
      alignText: 'center',
    };
    return (
      <div>
        <header style={ myStyleHeader }>
          <p data-testid="total-field">
            Despesa Total: R$
            {total}
            <span data-testid="header-currency-field"> BRL </span>
          </p>
          <p data-testid="email-field">{email}</p>
        </header>
        <main style={ myStyleMain }>
          {expenses.length > 0 ? (
            <Table />
          ) : (
            <h3>Nenhuma Despesa Cadastrada</h3>
          )}
        </main>
        <footer>{editMenu ? <EditExpense /> : <Form />}</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
    editMenu: state.wallet.editMenu,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (details) => dispatch(newExpenseAction(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  editMenu: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
