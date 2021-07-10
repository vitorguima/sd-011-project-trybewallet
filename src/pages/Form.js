import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor da despesa">
            Valor:
            <input type="text" id="valor da despesa" name="name" />
          </label>
          <label htmlFor="descrição da despesa">
            Descrição:
            <input type="text" id="descrição da despesa" name="name" />
          </label>
          <label htmlFor="despesa">
            Moeda:
            <select id="despesa" name="name">
              <option>Moeda</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag:
            <select id="Tag">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option valeu="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
