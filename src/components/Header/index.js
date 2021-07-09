import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <label htmlFor="value">
          <input type="number" name="value" id="" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select name="currrency" id="">
            <optgroup>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
            </optgroup>
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de Pagamento:
          <select name="paymentMethod" id="">
            <optgroup>
              <option value="money">Dinheiro</option>
              <option value="debt">Débito</option>
              <option value="credit">Crédito</option>
            </optgroup>
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Categoria:
          <select name="paymentMethod" id="">
            <optgroup>
              <option value="alimentation">Alimentação</option>
              <option value="acomodation">Acomodação</option>
              <option value="leasure">Lazer</option>
            </optgroup>
          </select>
        </label>

      </header>
    )
  }
}