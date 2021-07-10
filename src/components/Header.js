import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sumTotal = expenses
      .reduce((acc, curr) => acc + (curr
        .exchangeRates[curr.currency].ask * curr.value), 0);
    return Number(sumTotal).toFixed(2);
  }

  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${emailUser}`}</span>
          <span data-testid="total-field">
            Despesa Total:
            { this.sumExpenses() }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailUser: PropTypes.string,
  expenses: PropTypes.number,
}.isRequired;
