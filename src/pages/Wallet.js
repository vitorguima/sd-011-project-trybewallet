import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';
import Form from './Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      spent: 0,
    };
  }

  componentDidMount() {
    const { funcCoins } = this.props;
    funcCoins();
  }

  render() {
    const { spent } = this.state;
    const { email, coins } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>
        <header>
          <p><span data-testid="email-field">{ email }</span></p>
          <p><span data-testid="total-field">{ spent }</span></p>
          <p><span data-testid="header-currency-field">BRL</span></p>
        </header>
        <Form coins={ coins } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  funcCoins: () => dispatch(fetchCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
