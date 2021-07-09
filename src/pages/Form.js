import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>

        <label htmlFor="description-input">
          Descrição
          <input type="text" id="description-input" />
        </label>

        <label htmlFor="coin-input">
          Moeda
          <select id="coin-input">
            <option>vazio</option>
          </select>
        </label>

        <label htmlFor="pay-input">
          Método de pagamento
          <select id="pay-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag
          <select id="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
