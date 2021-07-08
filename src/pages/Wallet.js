import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }

  render() {
    const { valor } = this.state;
    const { emailUser } = this.props;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <header>
          <span data-testid="email-field">{ `Email: ${emailUser}` }</span>
          <span data-testid="total-field">{ `Despesa Total: ${valor}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  emailUser: PropTypes.string,
}.isRequired;
