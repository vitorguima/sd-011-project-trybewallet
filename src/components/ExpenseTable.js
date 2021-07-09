import React from 'react';
import Expenses from './Expenses';
import './ExpenseTable.css';

class ExpenseTable extends React.Component {
  render() {
    return (
      <table className="expenses-table">
        <thead className="expenses-table-head">
          <tr>
            <th className="description">Descrição</th>
            <th className="expense-tag">Tag</th>
            <th className="method">Método de pagamento</th>
            <th className="value">Valor</th>
            <th className="currency">Moeda</th>
            <th className="exchange">Câmbio utilizado</th>
            <th className="converted">Valor convertido</th>
            <th className="currency-converted">Moeda de conversão</th>
            <th className="buttons">Editar/Excluir</th>
          </tr>
        </thead>
        <Expenses />
      </table>
    );
  }
}

export default ExpenseTable;
