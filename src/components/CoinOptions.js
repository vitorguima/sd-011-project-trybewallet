import React from 'react';
import { useSelector } from 'react-redux';

export default function CoinOptions() {
  const coins = useSelector((state) => state.wallet.currencies);
  return (
    <>
      { coins.map((coin, index) => {
        if (coin.codein !== 'BRLT') {
          return (
            <option key={ index }>
              { coin.code }
            </option>
          );
        }
        return null;
      }) }
    </>
  );
}
