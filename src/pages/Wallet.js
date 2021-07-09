import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getUser } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <div data-testid="email-field">
            { getUser }
          </div>
          <div data-testid="total-field">
            { 0 }
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = ({
  getUser: PropTypes.string,
}).isRequired;

const mapStateToProps = (state) => ({
  getUser: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
