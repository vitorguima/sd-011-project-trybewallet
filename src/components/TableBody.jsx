import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actionFunctions from '../actions';

export default function TableBody({ expenses }) {
  const dispatch = useDispatch();
  const deleteExpense = (e) => {
    dispatch(actionFunctions.removeExpenses(e));
  };

  return (
    <tbody>
      {expenses.map((item, index) => (
        <tr key={ index }>
          <td>{item.description}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{item.value}</td>
          <td>{item.exchangeRates[item.currency].name}</td>
          <td>{(Number(item.exchangeRates[item.currency].ask)).toFixed(2)}</td>
          <td>
            {
              (Number(item.exchangeRates[item.currency].ask)
              * Number(item.value)).toFixed(2)
            }
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="edit-btn"
              className="editButton itemBttnC"
              // onClick={ () => editAction(item.id) }
            >
              Editar
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              className="deleteButton itemBttnC"
              onClick={ () => deleteExpense(index) }
            >
              Deletar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};
