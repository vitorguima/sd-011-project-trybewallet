import React from 'react';

class Form extends React.Component {
  render() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOption = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin" name="coin">
            vazio
          </select>
        </label>
        <label htmlFor="methods">
          Método de Pagamento:
          <select name="methods" id="methods">
            {methodPayment
              .map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="categories">
          Tag
          <select name="categories" id="categories">
            {tagOption
              .map((category, index) => <option key={ index }>{category}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
