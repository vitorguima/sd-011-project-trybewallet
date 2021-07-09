import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../actions';

export default function () {
  const dispatch = useDispatch();
  const userExpenses = useSelector((state) => state.wallet.expenses);

  const handleDelete = (id) => {
    const updatedExpenses = userExpenses.filter((el) => el.id !== id);
    dispatch(removeExpense(updatedExpenses));
  };

  const getExpenses = () => {
    if (userExpenses.length > 0) {
      return userExpenses.map((el, index) => {
        const { description, method, tag, value, exchangeRates, currency, id } = el;
        const { name, ask } = exchangeRates[currency];
        const convertedPrice = ask * value;

        return (
          <tr key={index}>
            <th role="cell">{description}</th>
            <td role="cell">{tag}</td>
            <td role="cell">{method} </td>
            <td role="cell">{value}</td>
            <td role="cell">{name}</td>
            <td role="cell">{parseFloat(ask).toFixed(2)}</td>
            <td role="cell">{convertedPrice}</td>
            <td role="cell">Real</td>
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
