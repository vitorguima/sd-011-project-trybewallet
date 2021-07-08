import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [total, SetTotal] = React.useState(0);
  const [currency, setCurrency] = React.useState('BRL');
  const currentState = useSelector((state) => state);
  console.log(SetTotal);
  console.log(setCurrency);

  return (
    <header>
      <h2>My Wallet</h2>
      <div>
        <p data-testid="email-field">{ `Bem vindo ${currentState.user.email}` }</p>
        <p data-testid="total-field">{ `Valor: ${total}`}</p>
        <p data-testid="header-currency-field">{`${currency}`}</p>
      </div>
    </header>
  );
};

export default Header;
