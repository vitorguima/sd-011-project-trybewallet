import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // renderTotalValue() {
  //   const { totalValue } = this.props;
  //   let values = totalValue.map((expense) => JSON.parse(expense.value));
  //   if (values.length === 0) {
  //     values = [0];
  //     return values;
  //   }
  //   return JSON.stringify(values.reduce((acc, curr) => acc + curr));
  // }

  trueValue() {
    const { expenses } = this.props;
    console.log(expenses);
  //   const expensesValue = actionState.value;
  //   const exchangeToMultiply = actionState.currency;
  //   const array = Object.values(actionExchange);
  //   const filteredObj = JSON.parse(array.filter((obj) => obj.code === exchangeToMultiply));
  //   const multipliedValue = (filteredObj[0].ask * expensesValue);
  //   return multipliedValue;
  }

  render() {
    const { email } = this.props;
    return (
      <header className="header-container">
        <span className="email" data-testid="email-field">
          {email}
        </span>
        <p
          data-testid="total-field"
        >
          {this.trueValue()}
        </p>
        <span className="currency" data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  // totalValue: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
