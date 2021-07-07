import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SeCurrency extends Component {
  render() {
    const { value, handle, currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          value={ value }
          onChange={ handle }
        >
          {Object
            .values(currencies)
            .filter((item) => item.codein !== 'BRLT')
            .map((item, index) => (
              <option value={ item.code } key={ index }>{item.code}</option>))}
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
