import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Usuário:
          {' '}
          {userEmail}
        </p>
        <p>
          Gasto total:
          {' '}
          <span data-testid="total-field">
            {
              expenses.reduce((acc, expense) => {
                const exchangeRate = Number(expense.exchangeRates[expense.currency].ask);
                const price = Number(expense.value) * exchangeRate;
                return acc + price;
              }, 0)

            }

          </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
