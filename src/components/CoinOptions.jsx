import React from 'react';

export default function CoinOptions({ currencies }) {
  const allCurrencies = Object.keys(currencies);
  const filteredCurrencies = allCurrencies.filter((key) => key !== 'USDT');
  return (
    <>
      { filteredCurrencies.map((key) => <option 
      key={ key } value={ key }>{ key }</option>) }
    </>
  );
}
