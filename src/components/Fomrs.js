import React, { Component } from 'react';

class Fomrs extends Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input id="Valor" type="text" name="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <textarea id="Descrição" type="text" name="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="Moeda">
            <option>Moeda:</option>
          </select>
        </label>
        <label htmlFor="Pagamento">
          Método de pagamento:
          <select id="Pagamento" name="Pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaodecredito">Cartão de crédito</option>
            <option value="cartaodedebito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select id="Tag" name="Tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Fomrs;
