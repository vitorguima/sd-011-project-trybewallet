import React, { Component } from 'react';

class FormDespesa extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" name="valor" />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição:
            <input type="text" name="descricao" />
          </label>
          <br />
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda">
              <option>BRL</option>
            </select>
          </label>
          <br />
          <label htmlFor="method">
            Método de pagamento:
            <select name="method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FormDespesa;
