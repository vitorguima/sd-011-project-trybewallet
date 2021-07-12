import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {/* <option /> */}
            </select>
          </label>
          <label htmlFor="metodo-pag">
            Método de Pagamento
            <select id="metodo-pag">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
