import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ExpensesTable from '../components/ExpensesTable';
import SubmitForm from '../components/SubmitForm';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses(expenses) {
    if (expenses.length) {
      return (expenses
        .reduce(
          (a, b) => a + (Number(b.value) * Number(b.exchangeRates[b.currency].ask)), 0,
        ));
    }
  }

  renderHeader(email) {
    const { expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          { expenses.length ? this.sumExpenses(expenses) : 0}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderCurrencyOptions() {
    const { currencies } = this.state;
    return (
      Object.keys(currencies).filter((c) => c !== 'USDT').map((currency) => (
        <option
          key={ currency }
          value={ currency }
        >
          { currency }
        </option>))
    );
  }

  render() {
    const { email, idToEdit } = this.props;

    return (
      <div className="wallet-wrapper">
        {this.renderHeader(email)}
        {idToEdit ? <EditForm /> : <SubmitForm />}
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.shape({
        ask: PropTypes.string,
        bid: PropTypes.string,
        code: PropTypes.string,
        codein: PropTypes.string,
        create_date: PropTypes.string,
        high: PropTypes.string,
        low: PropTypes.string,
        name: PropTypes.string,
        pctChange: PropTypes.string,
        timestamp: PropTypes.string,
        varBid: PropTypes.string,
      }).isRequired,
    }),
  ),
  dispatchEpenses: PropTypes.func,
}.isRequired;
