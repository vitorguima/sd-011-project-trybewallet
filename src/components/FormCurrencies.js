import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormCurrencies extends Component {
  render() {
    const { currenciesState, handleInputs, value } = this.props;
    const currencies = currenciesState ? Object.keys(currenciesState) : null;

    return (
      <label htmlFor="currencies">
        Moedas
        <select name="currencies" onChange={ handleInputs } value={ value }>
          { currencies
            ? currencies.map((currency) => {
              if (currency !== 'USDT') {
                return (
                  <option key={ `currency ${currency}` }>
                    { currency }
                  </option>
                );
              }
              return null;
            })
            : null }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies[0],
});

export default connect(mapStateToProps)(FormCurrencies);

FormCurrencies.propTypes = {
  currenciesState: PropTypes.object,
  handleInputs: PropTypes.func,
  value: PropTypes.number,
}.isRequired;
