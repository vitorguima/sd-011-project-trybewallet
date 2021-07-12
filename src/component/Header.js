import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalContext } from '../GlobalContext';

const Header = () => {
  const { providerValues } = React.useContext(GlobalContext);
  const userState = useSelector((state) => state.user);

  return (
    <header>
      <h2>My Wallet</h2>
      <div>
        <p data-testid="email-field">{ `Bem vindo ${userState.email}` }</p>
        <p data-testid="total-field">{ `Valor: ${providerValues.total}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    </header>
  );
};

export default Header;
