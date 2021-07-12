import React from 'react';
import InputText from './InputText';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form-wallet">
        <InputText name="Valor" handleChange={ this.handleChange } />
        <InputText name="Descrição" handleChange={ this.handleChange } />
        <div>
          <label htmlFor="moeda">
            Moeda:
            <select className="form-wallet-input-field" name="moeda" id="moeda">
              <option value="">BRL</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="payment">
            Método de pagamento:
            <select className="form-wallet-input-field" name="payment" id="payment">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="payment">
            Tag:
            <select className="form-wallet-input-field" name="tag" id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

export default Form;
