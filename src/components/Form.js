import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              <option key="BRL">BRL</option>
              <option key="Y">Y</option>
              <option key="Z">Z</option>
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method">
              <option key="Dinheiro">Dinheiro</option>
              <option key="Cartão de crédito">Cartão de crédito</option>
              <option key="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option key="Alimentação">Alimentação</option>
              <option key="Lazer">Lazer</option>
              <option key="Trabalho">Trabalho</option>
              <option key="Transporte">Transporte</option>
              <option key="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
