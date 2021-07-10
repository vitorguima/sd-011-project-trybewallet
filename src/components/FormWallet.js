import React, { Component } from 'react';

class FormWallet extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input id="desc" type="text" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="R$">BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="methoddesp">
          Tag
          <select name="methoddesp" id="methoddesp">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Transporte">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
