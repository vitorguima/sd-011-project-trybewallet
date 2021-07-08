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

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
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
          {currency()}
          {paymentMethod()}
          {category()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
