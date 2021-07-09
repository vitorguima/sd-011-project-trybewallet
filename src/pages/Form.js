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
          <select id="moeda"><option value="CAD">CAD</option></select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
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
