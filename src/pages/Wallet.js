import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      total: 0,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { total } = this.state;
    return (
      <div>
        <h1 data-testid="email-field">{ userEmail }</h1>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option value="dolar">dolar</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const MapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(MapStateToProps, null)(Wallet);
