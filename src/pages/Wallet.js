import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getUserMail } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{ getUserMail }</p>
          <p data-testid="total-field">{0}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  getUserMail: user.email,
});

Wallet.propTypes = {
  getUserMail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
