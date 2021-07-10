import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <h1 className="header-title">TrybeWallet</h1>
        <p className="header-email" data-testid="email-field">{email}</p>
        <p data-testid="total-field">0</p>
        <select data-testid="header-currency-field">
          <option value="valor1">BRL</option>
        </select>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
