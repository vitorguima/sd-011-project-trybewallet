import React from 'react';
import { connect } from 'react-redux';

const CompOptionMoed = ({ arraysWallet }) => {
  const { currencies } = arraysWallet.wallet;
  return (
    currencies.map((v, index) => <option value={ v } key={ index }>{ v }</option>)
  );
};

const arrayCurrencies = (state) => ({
  arraysWallet: state,
});

export default connect(arrayCurrencies)(CompOptionMoed);
