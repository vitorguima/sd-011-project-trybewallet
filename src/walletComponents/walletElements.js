import React from 'react';

export function expenses(handlerInput) {
  return (
    <label htmlFor="expenses">
      Valor
      <input
        name="value"
        id="expenses"
        type="number"
        onChange={ (e) => handlerInput(e) }
      />
    </label>);
}

export function description(handlerInput) {
  return (
    <label htmlFor="description">
      Descrição
      <input
        id="description"
        type="text"
        name="description"
        onChange={ (e) => handlerInput(e) }
      />
    </label>);
}

export function currency(currencies, handlerInput) {
  return (
    <label htmlFor="currency">
      Moeda
      <select name="currency" id="currency" onChange={ (e) => handlerInput(e) }>
        {currencies.map((anyCurr) => (<option key={ anyCurr }>{anyCurr}</option>))}
      </select>
    </label>);
}

export function paymentMethod(handlerInput) {
  return (
    <label htmlFor="payment-method">
      Método de pagamento
      <select name="method" id="payment-method" onChange={ (e) => handlerInput(e) }>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
}

export function category(handlerInput) {
  return (
    <label htmlFor="category">
      Tag
      <select name="tag" id="category" onChange={ (e) => handlerInput(e) }>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
}
