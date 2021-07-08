import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../actions';
import { sendExpense, getExchangeRate } from '../services/API';

export default function ExpenseForm(props) {
  const getOptions = () => {
    if (props.currencies) {
      return props.currencies.map((el) => <option value={`${el}`}>{el}</option>);
    }
  };

  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = new FormData(target);
    const expense = {};
    for (let pair of data) {
      const [key, value] = pair;
      expense[key] = value;
    }
    const exchangeRate = await getExchangeRate();
    expense.exchangeRate = exchangeRate;
    dispatch(addExpense(expense));
  };

  return (
    <form className="d-flex justify-content-between border p-2" onSubmit={handleFormSubmit}>
      <div className="form-group ">
        <label for="valueInput">
          Valor
          <input
            name="value"
            type="number"
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
          <select name="method" defaultValue="Selecione a moeda:" className="form-select">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label for="tagInput">
          Tag
          <select name="tag" id="tagInput" className="form-select">
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
            name="description"
            type="number"
            className="form-control"
            id="descriptionInput"
            placeholder="Adicione a descrição"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
