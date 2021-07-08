import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          Olá TrybeWallet
          { username }
        </header>
        <label htmlFor="gastos">
          Total de Gastos:
          <input
            id="gastos"
            data-testid="total-field"
            name="gastos"
            type="number"
            value="0"
          />
        </label>
        <label htmlFor="cambio">
          Cambio:
          <input
            id="cambio"
            data-testid="header-currency-field"
            name="cambio"
            type="text"
            value="BRL"
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email });

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  username: PropTypes.string.isRequired,
};
