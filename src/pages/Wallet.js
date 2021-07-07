import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <strong data-testid="email-field">{userEmail}</strong>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const MapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(MapStateToProps)(Wallet);
