import React from 'react';
import './Wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="walletHeader">
          <h1>
            Trybe
            <span className="stringDetail">Wallet</span>
          </h1>
          <h3>
            Seja bem vindo:&nbsp;
            <span data-testid="email-field">{email}</span>
          </h3>
          <h5 data-testid="total-field">
            Despesa total: 0&nbsp;
            <span data-testid="header-currency-field">BRL</span>
          </h5>
        </header>

        <section className="walletBody">
          <WalletForm />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
