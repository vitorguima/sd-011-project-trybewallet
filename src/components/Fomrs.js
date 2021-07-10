import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Fomrs extends Component {
  render() {
    const { currency } = this.props;
    return (
      <form className="forms">
        <label htmlFor="Valor">
          Valor:
          <input id="Valor" className="Valor" type="text" name="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <textarea id="Descrição" type="text" name="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="Moeda">
            {console.log(currency)}
            {
              currency
                .map((item, index) => (
                  <option key={ index } value={ item.code }>{item.code}</option>))
            }
          </select>
        </label>
        <label htmlFor="Pagamento">
          Método de pagamento:
          <select id="Pagamento" name="Pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaodecredito">Cartão de crédito</option>
            <option value="cartaodedebito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select id="Tag" name="Tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencyList,
});

export default connect(mapStateToProps)(Fomrs);

Fomrs.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.object).isRequired,
};
