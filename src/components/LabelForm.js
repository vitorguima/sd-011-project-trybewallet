import React from 'react';

const LabelForm = () => (
  <form>
    <label htmlFor="valor">
      Valor
      <input type="text" id="valor" name="valor" />
    </label>
    <label htmlFor="descrição">
      Descrição
      <input type="text" id="descrição" name="descrição" />
    </label>
    <label htmlFor="moeda">
      Moeda
      <select id="moeda">
        <option> oi</option>
      </select>
    </label>
    <label htmlFor="pay">
      Método de pagamento
      <select id="pay">
        <option> Metodo de pagamento! </option>
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
  </form>
);

export default LabelForm;
