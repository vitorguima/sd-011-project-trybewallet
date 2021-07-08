import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor>
          Valor
          <input type="text" />
        </label>
        <label htmlFor>
          Descrição
          <input type="text" />
        </label>
        <label htmlFor>
          Moeda
          <select> </select>
        </label>
        <label htmlFor>
          Método de pagamento
          <select>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor>
          Tag
          <select>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>);
  }
}
