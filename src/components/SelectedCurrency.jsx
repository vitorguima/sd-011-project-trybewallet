import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectedCurrency extends Component {
  render() {
    const { coinType } = this.props;
    return (
      <label htmlFor="options">
        Moeda:
        <select id="options">
          {
            coinType.map((type) => <option key={ type.code }>{ type.code }</option>)
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  coinType: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectedCurrency);

SelectedCurrency.propTypes = {
  coinType: PropTypes.array,
}.isRequired;
