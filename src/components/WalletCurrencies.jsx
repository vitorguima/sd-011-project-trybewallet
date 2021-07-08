import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletCurrencies extends Component {
  render() {
    const { curr } = this.props;
    return (
      <>
        {curr.map((itens, index) => {
          if (itens !== 'USDT') {
            return (
              <option key={ index }>
                { itens }
              </option>);
          }
          return null;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  curr: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletCurrencies);

WalletCurrencies.propTypes = {
  curr: PropTypes.arrayOf().isRequired,
};
