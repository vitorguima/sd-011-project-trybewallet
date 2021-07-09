import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" placeholder="Digite o valor" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option value="CUR">CUR</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            placeholder="Descrição da despesa"
            id="description"
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

export default Form;
