import React from 'react';
import PropTypes from 'prop-types';

export default function CoinOptions({ currencies }) {
  const allCurrencies = Object.keys(currencies);
  const filteredCurrencies = allCurrencies.filter((key) => key !== 'USDT');
  return (
    <>
      { filteredCurrencies.map((key) => (
        <option
          key={ key }
          value={ key }
        >
          { key }
        </option>))}
    </>
  );
}

CoinOptions.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
};
