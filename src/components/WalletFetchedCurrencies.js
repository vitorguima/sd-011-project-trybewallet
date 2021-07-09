import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletFetchedCurrencies extends Component {
  render() {
    const { fetchedCurr } = this.props;
    return (
      <>
        { Object.values(fetchedCurr).filter((filtered) => (filtered.codein !== 'BRLT'))
          .map((currency, index) => (
            <option key={ index }>
              { currency.code }
            </option>
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchedCurr: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletFetchedCurrencies);

WalletFetchedCurrencies.propTypes = {
  fetchedCurr: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
