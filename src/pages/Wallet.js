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
  const { total } = walletStore;

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

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
            <div data-testid="total-field">{total.toFixed(2)}</div>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </nav>
      <Expenses />
      <Table />
    </div>
  );
}
