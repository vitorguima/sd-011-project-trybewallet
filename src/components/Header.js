import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  generateTotal() {
    const { total } = this.props;
    const totalExchange = total
      .reduce((acc, cur) => acc + cur.value * cur.exchangeRates[cur.currency].ask, 0);
    return totalExchange.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/wallet.png" alt="wallet" />
        <div data-testid="email-field">{ email }</div>
        <div className="total-header">
          <div data-testid="total-field">{`Total: ${this.generateTotal()}`}</div>
          <div data-testid="header-currency-field" className="currency-header">BRL</div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.arrayOf(PropTypes.number).isRequired,
  email: PropTypes.string.isRequired,
};

// FONTE PARA USAR UMA CONST COMO ACESSO DE UM OBJETO: https://stackoverflow.com/questions/4255472/javascript-object-access-variable-property-by-name-as-string

export default Header;
