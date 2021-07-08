import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const totalSpend = 0;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{`Despesa total: ${totalSpend}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
