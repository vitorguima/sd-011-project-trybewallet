import React from 'react';

class form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" name="value" id="value" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              <option>USD</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento:
            <select id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            tag:
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              value="description"
              placeholder="Descrição"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default form;
