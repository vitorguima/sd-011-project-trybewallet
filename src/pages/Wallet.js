import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { stateLogin } = this.props;
    const { email } = stateLogin.user;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <div data-testid="total-field">
          0
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateProps = (state) => ({
  stateLogin: state,
});

export default connect(mapStateProps)(Wallet);
