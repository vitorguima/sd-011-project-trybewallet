import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendExpense } from '../services/API';

export default function ExpenseForm(props) {
  const getOptions = () => {
    if (props.currencies) {
      return props.currencies.map((el) => <option value={`${el}`}>{el}</option>);
    }
  };
  const dispatch = useDispatch();
  const formSub = document.getElementById('expensesForm');

  const handleFormSubmit = (e) => {
    const data = new FormData(e);
    const expense = {};
    for (let pair of data) {
      const [key, value] = pair;
      expense[key] = value;
    }
    dispatch(sendExpense(expense));
  };

  return (
    <form
      id="expensesForm"
      className="d-flex justify-content-between border p-2"
      onSubmit={handleFormSubmit}
    >
      <div className="form-group ">
        <label for="valueInput">
          Valor
          <input
            required
            name="value"
            type="number"
            step=".01"
            className="form-control"
            id="valueInput"
            placeholder="Adicione o valor"
          />
        </label>
      </div>
      <div className="form-group">
        <label for="currencyInput">
          Moeda
          <select id="currencyInput" name="currency" className="form-select">
            {getOptions()}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label for="paymentMethod">
          Método de pagamento
          <select required name="method" defaultValue="Selecione a moeda:" className="form-select">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label for="tagInput">
          Tag
          <select required name="tag" id="tagInput" className="form-select">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
      <div className="form-group ">
        <label for="descriptionInput">
          Descrição
          <input
            required
            name="description"
            type="text"
            className="form-control"
            id="descriptionInput"
            placeholder="Adicione a descrição"
          />
        </label>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          handleFormSubmit(formSub);
        }}
      >
        Adicionar
      </button>
    </form>
  );
}
