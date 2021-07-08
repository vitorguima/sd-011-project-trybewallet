import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">{email}</header>
        <div>
          Despesa Total:
          <span data-testid="total-field"> 0 </span>
        </div>
        <div>
          Moeda:
          <span data-testid="header-currency-field"> BRL </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
