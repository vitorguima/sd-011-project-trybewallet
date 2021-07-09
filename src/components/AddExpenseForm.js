import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isFetching } from '../actions';
import CoinOptions from './CoinOptions';

function AddExpenseForm() {
  const dispatch = useDispatch();
  const fetching = () => dispatch(isFetching());
  useEffect(() => {
    fetching();
  });
  return (
    <form>
      <label htmlFor="spent">
        Valor:
        <input type="number" id="spent" />
      </label>
      <label htmlFor="describe">
        Descrição:
        <input type="text" id="describe" />
      </label>
      <label htmlFor="coin">
        Moeda:
        <select type="text" id="coin">
          <CoinOptions />
        </select>
      </label>
      <label htmlFor="payment">
        Método de pagamento:
        <select type="text" id="payment">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="payment">
        Tag:
        <select type="text" id="payment">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </form>
  );
}

export default AddExpenseForm;
