import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import '../CSS/Wallet.css';

class Wallet extends React.Component {
  totalSpent() {
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="wallet-header">
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{`Despesa total: ${this.totalSpent()}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
