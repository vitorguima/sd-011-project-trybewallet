import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletCurrencies } from '../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      accuValue: 0,
    };

    this.firstValuation = this.firstValuation.bind(this);
  }

  firstValuation() {
    const { fromCurrencies, toCurrency } = this.props;
    const { accuValue } = this.state;
    if (fromCurrencies.length === 0) {
      console.log('accuV', accuValue);
      toCurrency(accuValue);
      return accuValue;
    }
    console.log('curren', fromCurrencies);
    return (parseFloat(fromCurrencies));
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <div>Header</div>
        <div data-testid="email-field">{ user }</div>
        <div data-testid="total-field">{ this.firstValuation() }</div>
        <div data-testid="header-currency-field">BRL</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  fromCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toCurrency: (payload) => dispatch(walletCurrencies(payload)),
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  fromCurrencies: PropTypes.oneOf(
    PropTypes.number,
  ).isRequired,
  toCurrency: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
