import React from 'react';

export default class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select name="coin" id="coin">
            vazio
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="Alimentacao">Alimentação</option>
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
