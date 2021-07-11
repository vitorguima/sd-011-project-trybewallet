import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  render() {
    const { stateLogin } = this.props;
    const { email } = stateLogin.user;
    const { value } = this.state;

    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ value }</span>
        <div data-testid="header-currency-field">BRL</div>
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
