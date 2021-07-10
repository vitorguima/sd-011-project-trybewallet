import React from 'react';
import { useSelector } from 'react-redux';

const NavWallet = () => {
  const email = useSelector((state) => state.user.email);
  const [total] = React.useState(0);
  return (
    <nav>
      <div className="nav-header">
        <p>
          Welcome:
          <span data-testid="email-field">
            {email}
          </span>
        </p>
        <div className="despesas">
          <p data-testid="total-field">
            {total}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavWallet;
