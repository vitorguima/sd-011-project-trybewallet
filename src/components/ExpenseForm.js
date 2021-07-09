import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendExpense } from '../services/API';

export default function ExpenseForm() {
  const currencies = useSelector((state) => state.wallet.currencies);
  const dispatch = useDispatch();

  const getOptions = () => {
    if (currencies.length > 0) {
      return currencies.map((el, index) => {
        return (
          <option key={index} value={el.code}>
            {el.code}
          </option>
        );
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = new FormData(target);
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
        <label htmlFor="valueInput">
          Valor
          <input
            required
            id="valueInput"
            name="value"
            type="number"
            step=".01"
            className="form-control"
            placeholder="Adicione o valor"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="currency">
          Moeda
          <select defaultValue="USD" id="currency" name="currency" className="form-select">
            {getOptions()}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select
            id="paymentMethod"
            required
            name="method"
            defaultValue="Selecione a moeda:"
            className="form-select"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="tagInput">
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
        <label htmlFor="descriptionInput">
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
      <button type="submit" className="btn btn-primary">
        Adicionar despesa
      </button>
    </form>
  );
}
