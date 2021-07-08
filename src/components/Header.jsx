import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { getUserEmail } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{ getUserEmail }</p>
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

      </div>
    );
  }
}

Header.propTypes = {
  getUserEmail: PropTypes.string.isRequired,
};
