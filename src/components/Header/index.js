import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormMoney from '../FormMoney';
import './Header.css';

class Header extends React.Component {
  render() {
    const { userInfo, totalInfo } = this.props;

    return (
      <header className="header-container">
        <div className="user-info-container">
          <span className="logo">
            TRYVEL.
          </span>
          <span data-testid="email-field">
            { userInfo }
          </span>
          <span data-testid="total-field">
            Despesa total: R$&nbsp;
            { totalInfo }
            <span data-testid="header-currency-field">
              &nbsp;BRL
            </span>
          </span>
        </div>
        <FormMoney />
        <button type="button">
          Adicionar Despesa
        </button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.email,
  totalInfo: state.wallet.expenses,
});

Header.propTypes = {
  userInfo: PropTypes.string.isRequired,
  totalInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Header);
