// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

function Wallet() {
  const [moedas, setMoedas] = useState([]);
  const [dispesasTotais] = useState(0);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fethApi = async () => {
      const response = await fetch(
        'https://economia.awesomeapi.com.br/json/all',
      );
      const data = await response.json();
      delete data.USDT;
      setMoedas(Object.keys(data));
      console.log(data);
    };
    fethApi();
  }, []);

  return (
    <div>
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
      <Form moedas={ moedas } />
    </div>
  );
}

export default Wallet;
