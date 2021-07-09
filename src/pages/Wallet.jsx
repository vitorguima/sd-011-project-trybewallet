import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  actionFunctions from '../actions'
import CoinOptions from '../components/CoinOptions';

const Wallet = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);
  const allCurrencies = useSelector((state) => state.wallet.currencies);
  useEffect(() => {
    dispatch(actionFunctions.fetchCurrency())
  },[]) // segundo parâmentro sendo array vazio apenas atualiza na montagem do componente
  return (
    <>
      <nav>
        <div data-testid="email-field">
          {userEmail}
        </div>
        <div data-testid="total-field">
          0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <label>
            Valor
            <input type="number" name="name" />
          </label>
          <label>
            Descrição
            <input type="text" name="name" />
          </label>
          <label>
            Moeda
            <select name="" id="">
              {/* {allCurrencies.filter((currency) => currency !== 'USDT')} */}
            </select>
          </label>
          <label>
            Método de pagamento
            <select name="" id="">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag
            <select name="" id="">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </nav>
    </>
  )
}

export default Wallet;
