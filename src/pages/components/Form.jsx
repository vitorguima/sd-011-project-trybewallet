import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const Moedas = (currencies.map((coins) => Object.values(coins)
      .map((siglas) => siglas)
      .filter((item) => item.codein !== 'BRLT')
      .map((element) => <option key={ element.code }>{element.code}</option>)));
    return (
      <form>
        {}
        <label htmlFor="Valor">
          Valor:
          <input id="Valor" type="text" name="value" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input id="Descrição" type="text" name="describe" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="coin">
            {Moedas}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento:
          <select id="Método de pagamento" type="text" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select id="Tag" type="text" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
};
