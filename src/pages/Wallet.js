import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    const { stateLogin } = this.props;
    const { email } = stateLogin.user;
    const { expenses } = stateLogin.wallet;
    let value = 0;

    expenses.forEach((e) => {
      value += Number(e.value);
    });

    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ value }</span>
        <span data-testid="header-currency-field">BRL</span>
        <FormWallet />
      </header>
    );
  }
}

const mapStateProps = (state) => ({
  stateLogin: state,
});

export default connect(mapStateProps)(Wallet);

Wallet.propTypes = {
  stateLogin: PropTypes.objectOf(PropTypes.object).isRequired,
};
