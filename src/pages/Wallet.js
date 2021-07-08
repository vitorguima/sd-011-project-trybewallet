import React from 'react';
import './Wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, expenses, expenseToEdit } = this.props;
    console.log(expenseToEdit);
    const saveExchangeRates = expenses
      .map((item) => Number(item.exchangeRates[item.currency].ask) * Number(item.value));
    return (
      <div className="walletContainer">
        <header className="walletHeader">
          <h1>
            Trybe
            <span className="stringDetail">Wallet</span>
          </h1>
          <h3>
            Seja bem vindo:&nbsp;
            <span data-testid="email-field">{email}</span>
          </h3>
          <h5 data-testid="total-field">
            Despesa total:
            {saveExchangeRates.reduce((acc, curr) => {
              acc += curr;
              return acc;
            }, 0)}
            &nbsp;
            <span data-testid="header-currency-field">BRL</span>
          </h5>
        </header>
        <div className="walletBodyContainer">
          <section className="walletBody">
            <WalletForm />
          </section>

          <section className="walletTable">
            <Table />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  expenseToEdit: state.wallet.edit,
  editingBool: state.wallet.editing,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenseToEdit: PropTypes.oneOfType([PropTypes.object]).isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
