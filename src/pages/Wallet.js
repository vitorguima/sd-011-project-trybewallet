// import React from 'react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

function Wallet() {
  const [dispesasTotais] = useState(0);
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1> testando aqui</h1>
      <header>
        <h2 data-testid="email-field">
          Bem vindo
          {user.email}
        </h2>
        <span data-testid="total-field">
          Despesa total :$
          {dispesasTotais}
        </span>
        <span data-testid="header-currency-field">{user.currencies}</span>
      </header>
      <Form />
    </div>
  );
}

export default Wallet;
