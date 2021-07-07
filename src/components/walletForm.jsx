import React from 'react';

const WalletForm = () => (
  <form>
    <label htmlFor="valueInput">
      Valor:
      <input id="valueInput" />
    </label>
    <label htmlFor="descriptionInput">
      Descrição:
      <input id="descriptionInput" />
    </label>
    <label htmlFor="coinSelect">
      Moeda:
      <select id="coinSelect">
        <option>BRL</option>
      </select>
    </label>
    <label htmlFor="paymentMethodSelect">
      Método de pagamento:
      <select id="paymentMethodSelect">
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
    <label htmlFor="tagSelect">
      Tag:
      <select id="tagSelect">
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  </form>
);

export default WalletForm;
