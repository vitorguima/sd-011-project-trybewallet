import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderInputValor() {
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            id="valor"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
  }

  renderInputDescricao() {
    return (
      <div>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
  }

  renderSelectMoeda() {
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">Moeda</select>
        </label>
      </div>
    );
  }

  renderSelectMetodoDePagamento() {
    return (
      <div>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }

  renderSelectTag() {
    return (
      <div>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form>
        { this.renderInputValor() }
        { this.renderInputDescricao() }
        { this.renderSelectMoeda() }
        { this.renderSelectMetodoDePagamento() }
        { this.renderSelectTag() }
      </form>
    );
  }
}

export default Form;
