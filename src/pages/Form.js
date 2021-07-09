import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            name="valor"
            placeholder="Digite o valor"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select><option id="moeda" value="CAD">CAD</option></select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select>
            <option id="payment" value="dinheiro">Dinheiro</option>
            <option id="payment" value="credito">Cartão de crédito</option>
            <option id="payment" value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select>
            <option id="tag" value="alimentacao">Alimentação</option>
            <option id="tag" value="lazer">Lazer</option>
            <option id="tag" value="trabalho">Trabalho</option>
            <option id="tag" value="transporte">Transporte</option>
            <option id="tag" value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            placeholder="Digite a descrição do produto"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default Form;
