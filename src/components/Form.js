import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select type="text" name="currency">
            <option>
              {}
            </option>
          </select>
        </label>
        <label htmlFor="payment">
          <select type="text" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" name="tag">
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
