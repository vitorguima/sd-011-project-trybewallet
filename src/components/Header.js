import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css';

function Header({ email }) {
  const [gasto, setGasto] = useState(0);
  return (
    <header>
      <div>
        <span data-testid="email-field">{ email }</span>
      </div>
      <div>
        <span>Total de gastos: </span>
        <span data-testid="total-field">{ gasto }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
