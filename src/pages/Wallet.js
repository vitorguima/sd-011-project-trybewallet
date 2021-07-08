import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Wallet extends React.Component {

  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">{email}</header>
        <Form />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    currencies: state.wallet.currencies,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};
