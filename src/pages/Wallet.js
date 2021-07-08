import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Expenses from '../components/ExpenseForm';
import Table from '../components/ExpenseTable';
import { fetchAPI } from '../services/API';
import { Link } from 'react-router-dom';

export default function Wallet() {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const thumbnail = 'https://remotar.com.br/wp-content/uploads/2020/10/Trybe-200x200.jpg';

  const walletStore = useSelector((state) => state.wallet);
  const { currencies } = walletStore;

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  const getTotalExpenses = () => {
    const { expenses } = walletStore;
    if (expenses.length > 0) {
      const redx = (prev, next) => {
        const total = parseFloat(prev) + parseFloat(next.convertedPrice);
        return parseFloat(total).toFixed(2);
      };
      return `R$ ${expenses.reduce(redx, 0)}`;
    }
    return `R$0,00`;
  };

  const showExpenses = () => {
    if (currencies.length > 0) {
      return <Expenses />;
    }
  };

  return (
    <div className="wallet">
      <nav>
        <Link to={'/'}>
          <img src={thumbnail} />
        </Link>
        <div className="navInfo">
          <span className="m-2" data-testid="email-field">
            <i className="fas fa-user m-2"></i>
            {userStore.email}
          </span>
          <div className="m-2">
            <span data-testid="total-field">{`Despesas totais: ${getTotalExpenses()} `}</span>
            <span data-testid="header-currency-field">{`BRL`}</span>
          </div>
        </div>
      </nav>
      {/* <Expenses /> */}
      {showExpenses()}
      <Table />
    </div>
  );
}
