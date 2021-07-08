import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Wallet = () => {
  const userEmail = useSelector((state) => state.user.email)
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
      </nav>
    </>
  )
}

export default Wallet;
