import React, { Component } from 'react';

export default class LabelForm extends Component {
  render() {
    const { coins } = this.props;
    console.log(coins);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {coins.map((coin, key) => (<option key={ key } value={ coin }>{ coin }</option>))}
          </select>
        </label>
        <label htmlFor="pay">
          Método de pagamento
          <select id="pay">
            <option> Metodo de pagamento! </option>
            <option>Dinheiro </option>
            <option>Cartão de crédito </option>
            <option>Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
            <option>Alimentação </option>
            <option>Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}
