import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencyTypes extends Component {
  render() {
    const { currencyTypes } = this.props;
    return (
      <>
        {Object.keys(currencyTypes).map((type, index) => {
          if (type !== 'USDT') {
            return (
              <option key={ index }>
                { type }
              </option>);
          }
          return null;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyTypes: state.wallet.currencies,
});

export default connect(mapStateToProps)(CurrencyTypes);

CurrencyTypes.propTypes = {
  currencyTypes: PropTypes.arrayOf().isRequired,
};
