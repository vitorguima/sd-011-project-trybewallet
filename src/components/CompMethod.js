import React from 'react';

const CompMethod = () => {
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  return (
    methods.map((method, index) => (
      <option value={ method } key={ index }>{ method }</option>))
  );
};

export default CompMethod;
