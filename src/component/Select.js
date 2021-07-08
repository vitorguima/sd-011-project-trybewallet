import React from 'react';

function Select() {
  return (
    <>
      <label htmlFor="payment">
        Método de pagamento:
        <select name="payment" id="payment">
          <option>Cartão de crédito</option>
          <option>Dinheiro</option>
          <option>Cartão de Débito</option>
        </select>
      </label>
      <label htmlFor="category">
        Tag:
        <select name="category" id="category">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </>
  );
}

export default Select;
