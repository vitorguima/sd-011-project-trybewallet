import React from 'react';
import Header from '../components/header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <label
          htmlFor="valor"
        >
          Valor:
          <input
            type="number"
          />
        </label>
        <label
          htmlFor="moeda"
        >
          Moeda:
          <select>
            <option>USD</option>
          </select>
        </label>
        <label
          htmlFor="metodo-pagamento"
        >
          Método de Pagamento:
          <select>
            <option>USD</option>
          </select>
        </label>
        <label
          htmlFor="tag"
        >
          tag:
          <select>
            <option>Alimentação</option>
          </select>
        </label>
        <label
          htmlFor="descrição"
        >
          Descrição:
          <input
            type="text"
          />
        </label>
      </div>
    );
  }
}

export default Wallet;
