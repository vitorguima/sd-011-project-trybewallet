import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SeCurrency extends Component {
  render() {
    const { value, handle, currencies } = this.props;
    return (
      <label htmlFor="currency-input">
        Moeda:
        <select
          name="currency"
          data-testid="currency-input"
          id="currency-input"
          value={ value }
          onChange={ handle }
        >
          {currencies
            .filter((item) => item !== 'USDT')
            .map((item, index) => (
              <option value={ item } key={ index }>{item}</option>))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SeCurrency.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(SeCurrency);
