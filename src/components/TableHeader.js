import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../actions';
import FormInput from './TableRow';

export default function () {
  const dispatch = useDispatch();
  const userExpenses = useSelector((state) => state.wallet.expenses);
  const handleDelete = (id) => {
    const updatedExpenses = userExpenses.filter((el) => el.id !== id);
    dispatch(removeExpense(updatedExpenses));
  };

  const getExpenses = () => {
    if (userExpenses.length > 0) {
      return userExpenses.map((el, index) => (<FormInput
        key={ index }
        user={ el }
        handleDelete={ handleDelete }
      />));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>{getExpenses()}</tbody>
    </table>
  );
}
