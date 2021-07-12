import React, { Component } from 'react';

class FormSelects extends Component {
  render() {
    return (
      <div>
        <label htmlFor="coin">
          Moeda
          <select name="coin" id="coin">
            <option>
              vazio
            </option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option>
              Dinheiro
            </option>
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>
              Alimentação
            </option>
            <option>
              Lazer
            </option>
            <option>
              Trabalho
            </option>
            <option>
              Transporte
            </option>
            <option>
              Saúde
            </option>
          </select>
        </label>
      </div>
    );
  }
}

export default FormSelects;
