import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import getCoins from '../services/CoinApi';

class Wallet extends React.Component {
  componentDidMount() {
    getCoins();
  }

  render() {
    const { email, coins } = this.props;
    console.log(coins);
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <h4 data-testid="email-field">{`Bem vindo: ${email}`}</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <section className="form">
          <Form coins={ coins } />
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
