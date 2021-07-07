import React from 'react';

export default function Header() {
  return (
    <main>
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" data-testid="value-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" data-testid="currency-input">
            <option value="Dinheiro">Vazio</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select data-testid="tag-input" id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte ">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          <button type="submit">Adicionar despesa</button>
        </label>
      </form>
    </main>
  );
}
