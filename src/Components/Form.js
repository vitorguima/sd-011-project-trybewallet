import React from 'react';

class form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" name="valor" id="value" />
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
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            tag:
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" id="description" />
          </label>
        </form>
      </div>
    );
  }
}

export default form;
