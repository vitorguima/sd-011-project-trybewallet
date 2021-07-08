import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { roundCurrency } from '../../helpers/utils';

class Header extends React.Component {
  getExpensesSum() {
    const { expenses } = this.props;

    return expenses
      .reduce((acc, { value, currency, exchangeRates }) => (
        acc + roundCurrency(parseFloat(value) * exchangeRates[currency].ask)
      ), 0);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <div>TrybeWallet</div>
        <section>
          <span data-testid="email-field">
            {`Email: ${email}`}
          </span>
          <span data-testid="total-field">
            { `Despesa total: R$ ${this.getExpensesSum()}` }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </section>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
