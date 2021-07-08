import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';
import Form from './Form';

class Wallet extends Component {
  render() {
    const { email, getData, expenses } = this.props;
    // REQUISIÇÃO A API FEITA ABAIXO
    getData();

    const reducerExpenses = () => {
      const total = expenses.reduce((acc, { exchangeRates, currency, value }) => (
        acc + (Number(exchangeRates[currency].ask) * Number(value))
      ), 0);
      return total.toFixed(2);
    };

    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{ reducerExpenses() }</span>
          <span data-testid="header-currency-field">BRL</span>
          <Form />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
