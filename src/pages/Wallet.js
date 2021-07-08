import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Expenses from '../components/ExpenseForm';
import { fetchAPI } from '../services/API';
import { getData } from '../actions';

export default function Wallet() {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const walletStore = useSelector((state) => state.wallet);
  const thumbnail = 'https://remotar.com.br/wp-content/uploads/2020/10/Trybe-200x200.jpg';
  const [currencies, setCurrencies] = useState('');

  useEffect(() => {
    if (!currencies) {
      fetchAPI().then((r) => {
        setCurrencies(r);
        dispatch(getData(r));
      });
    }
  }, [currencies]);

  const getForm = () => {
    if (currencies) {
      return <Expenses currencies={currencies.map((el) => el.code)} />;
    }
  };

  return (
    <div className="wallet">
      <nav>
        <img src={thumbnail} />
        <div className="navInfo">
          <span className="m-2" data-testid="email-field">{`Email: ${userStore.email}`}</span>
          <div className="m-2">
            <span data-testid="total-field">{`Despesas totais:200 `}</span>
            <span data-testid="header-currency-field">{`BRL`}</span>
          </div>
        </div>
      </nav>
      <div>{getForm()}</div>
    </div>
  );
}
