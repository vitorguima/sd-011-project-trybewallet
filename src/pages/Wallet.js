import React from 'react';
import '../css/wallet.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className="wallet-page">
        <header className="header-container">
          <p className="email" data-testid="email-field">{email}</p>
          <p className="expenses" data-testid="total-field">{`Despesa total: ${0}`}</p>
          <p className="currency" data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
