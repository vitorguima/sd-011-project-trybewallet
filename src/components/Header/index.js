import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import FormMoney from '../FormMoney';

import './Header.css';

class Header extends React.Component {
  render() {
    const { userInfo, totalInfo } = this.props;
    const totalExpenses = totalInfo.length === 0
      ? 0
      : totalInfo.reduce((acc, curr) => acc + (
        Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <header className="header-container">
        <div className="user-info-container">
          <span className="logo">
            TRYVEL.
          </span>
          <span data-testid="email-field">
            { userInfo }
          </span>
          <span data-testid="total-field">
            { parseFloat(totalExpenses).toFixed(2) }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
        <FormMoney />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.email,
  totalInfo: state.wallet.expenses,
});

Header.propTypes = {
  userInfo: PropTypes.string.isRequired,
  totalInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
