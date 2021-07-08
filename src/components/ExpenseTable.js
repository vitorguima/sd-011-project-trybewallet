import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../actions';

export default function () {
  const dispatch = useDispatch();
  const userExpenses = useSelector((state) => state.wallet.expenses);

  const handleDelete = (id) => {
    console.log(id);
    const updatedExpenses = userExpenses.filter((el) => el.id !== id);
    dispatch(removeExpense(updatedExpenses));
  };

  const getExpenses = () => {
    if (userExpenses.length > 0) {
      return userExpenses.map((el) => {
        const { description, method, tag, value, name, convertedPrice, ask, id } = el;
        return (
          <tr>
            <th>{description}</th>
            <td>{tag}</td>
            <td>{method} </td>
            <td>{value}</td>
            <td>{name}</td>
            <td>{ask}</td>
            <td>{convertedPrice}</td>
            <td>Real</td>
            <td>
              <button data-testid="edit-btn" className="btn fas fa-edit btn-info m-1" />
              <button
                onClick={() => handleDelete(id)}
                data-testid="delete-btn"
                className="btn fas fa-trash-alt btn-danger m-1"
              />
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de Pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor Convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>{getExpenses()}</tbody>
    </table>
  );
}
