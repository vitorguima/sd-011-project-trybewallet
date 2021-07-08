import React from 'react';

class Pagamento extends React.Component {
  render() {
    const methodsPay = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          name="Método de pagamento"
          id="Método de pagamento"
        >
          <option>Selecione o método de pagamento</option>
          { methodsPay.map((method, index) => (
            <option key={ index }>{ method }</option>)) }
        </select>
      </label>
    );
  }
}

export default Pagamento;
