import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spent: 0,
    };
  }

  render() {
    const { spent } = this.state;
    const { email } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>
        <header>
          <p><span data-testid="email-field">{ email }</span></p>
          <p><span data-testid="total-field">{ spent }</span></p>
          <p><span data-testid="header-currency-field">BRL</span></p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
