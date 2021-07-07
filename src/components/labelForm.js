import React from 'react';

function labelForm() {
  return (
    <>
      <label htmlFor="pay">
        Método de pagamento
        <select id="pay">
          <option>Dinheiro </option>
          <option>Cartão de crédito </option>
          <option>Cartão de débito </option>
        </select>
      </label>
      <label htmlFor="Tag">
        Tag
        <select id="Tag">
          <option>Alimentação </option>
          <option>Lazer </option>
          <option> Trabalho </option>
          <option> Transporte </option>
          <option> Saúde </option>
        </select>
      </label>
    </>
  );
}

export default labelForm;
