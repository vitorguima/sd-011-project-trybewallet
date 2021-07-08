import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <>
        <header>
          <h3 data-testid="email-field">
            {emailState}
          </h3>
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="total-field">0</p>
        </header>
        <form>
          <label htmlFor="input-valor">
            Valor
            <input name="input-valor" id="input-valor" />
          </label>
          <label htmlFor="input-descricao">
            Descrição
            <input name="input-descricao" id="input-descricao" />
          </label>
          <label htmlFor="input-select-coin">
            Moeda
            <select id="input-select-coin">
              <option valor="xablau">xablau</option>
            </select>
          </label>
          <label htmlFor="input-select-method">
            Método de pagamento
            <select id="input-select-method">
              <option valor="monney">Dinheiro</option>
              <option valor="credit">Cartão de crédito</option>
              <option valor="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-select-category">
            Tag
            <select id="input-select-category">
              <option valor="alimentation">Alimentação</option>
              <option valor="fun">Lazer</option>
              <option valor="work">Trabalho</option>
              <option valor="transport">Transporte</option>
              <option valor="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
