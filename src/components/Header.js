import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';

function Header() {
  // usei react hooks redux
  const email = useSelector((state) => state.user.email);
  return (
    <header>
      <div>
        <span data-testid="email-field">{ email }</span>
      </div>
      <div>
        <span>Total de gastos: </span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
}

export default Header;
