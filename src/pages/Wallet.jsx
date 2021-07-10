import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionFunctions from '../actions';
import CoinOptions from '../components/CoinOptions';
import TagOptions from '../components/TagOptions';
import MethodOptions from '../components/MethodOptions';
import TotalField from '../components/TotalField';
import Table from '../components/Table';

const Wallet = () => {
  const [expenses, setExpenses] = useState({ id: -1 });
  const dispatch = useDispatch();
  const walletState = useSelector((state) => state.wallet);
  const handleExpInput = ({ target }) => {
    setExpenses({ ...expenses, [target.name]: target.value });
  };
  const submitExpense = () => {
    const nextId = walletState.expenses.length === 0 ? 0 : walletState.expenses.length;
    dispatch(actionFunctions.fetchCurrency());
    dispatch(actionFunctions.saveExpenses({ ...expenses,
      exchangeRates: walletState.currencies,
      id: nextId }));
  };
  useEffect(() => { dispatch(actionFunctions.fetchCurrency()); }, []);// segundo parâmentro sendo array vazio apenas atualiza na montagem do componente
  return (
    <section>
      <TotalField />
      <label htmlFor="1">
        Valor
        <input id="1" type="number" name="value" onChange={ handleExpInput } />
      </label>
      <label htmlFor="2">
        Descrição
        <input id="2" type="text" name="description" onChange={ handleExpInput } />
      </label>
      <label htmlFor="3">
        Moeda
        <select id="3" name="currency" onChange={ handleExpInput }>
          <CoinOptions currencies={ walletState.currencies } />
        </select>
      </label>
      <label htmlFor="4">
        Método de pagamento
        <select name="method" id="4" onChange={ handleExpInput }>
          <MethodOptions />
        </select>
      </label>
      <label htmlFor="5">
        Tag
        <select name="tag" id="5" onChange={ handleExpInput }>
          <TagOptions />
        </select>
      </label>
      <button type="button" onClick={ submitExpense }>Adicionar despesa</button>
      <Table />
    </section>
  );
};

export default Wallet;
