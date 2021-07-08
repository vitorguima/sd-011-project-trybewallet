import React from 'react';

export function expenses() {
  return (
    <label htmlFor="expenses">
      Valor
      <input id="expenses" type="number" />
    </label>);
}

export function description() {
  return (
    <label htmlFor="description">
      Descrição
      <input id="description" type="text" />
    </label>);
}

export function currency(currencies) {
  return (
    <label htmlFor="currency">
      Moeda
      <select id="currency">
        {currencies.map((anyCurr) => (<option key={ anyCurr }>{anyCurr}</option>))}
      </select>
    </label>);
}

export function paymentMethod() {
  return (
    <label htmlFor="payment-method">
      Método de pagamento
      <select id="payment-method">
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
}

export function category() {
  return (
    <label htmlFor="category">
      Tag
      <select id="category">
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
}
