import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className="trybewallet-page">
        <header className="trybewallet-header">
          <p data-testid="email-field">{ `Email de login: ${email}` }</p>
          <p>
            {'Despesa total: '}
            <span data-testid="total-field">0</span>
          </p>
          <p>
            {'Câmbio utilizado: '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
