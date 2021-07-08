import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  expenses,
  description,
  currency,
  paymentMethod,
  category,
} from '../walletComponents/walletElements';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { request } = this.props;
    request();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div
        className="main-page"
      >
        <section>
          <div className="title">TrybeWallet</div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
        <form>
          {expenses()}
          {description()}
          {currency(currencies)}
          {paymentMethod()}
          {category()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  request: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
