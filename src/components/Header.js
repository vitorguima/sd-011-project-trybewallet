import React from 'react'
import { connect } from 'react-redux'
import logo from '../assets/logo.png';

export const Header = (props) => {
  const { user } = props;
  const { email } = user;
  const currencySymbol = 'BRL';
  const totalPrice = '0';

  return (
    <div className="header">
      <img
        className="header__img"
        src={ logo }
        alt="logo trybe"
      />
      <div className="user__info">
        <p className="info__email" data-testid="email-field">{`Email: ${email}`}</p>
        <p className="info__expense" data-testid="total-field">{`Despesa Total: ${currencySymbol} ${totalPrice}`}</p>
        <div className="currency__selector" data-testid="header-currency-field">
          <p>Moeda:</p>
          <select data-testid="header__currency__field" >
            <option>BRL</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
