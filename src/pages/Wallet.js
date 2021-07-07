import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">{getEmail}</h5>
          <p data-testid="total-field">0</p>
          <select data-testid="header-currency-field">
            <option>BRL</option>
          </select>
        </header>
        <form>
          <label>
            Valor
            <input type="text" />
          </label>
          <label>
            Descrição
            <textarea />
          </label>
          <label>
            Moeda
            <select />
          </label>
          <label>
            Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
