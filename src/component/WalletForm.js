import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="currency">
            { currencies.map((valor) => (
              <option
                name="currency"
                key={ valor }
              >
                {valor}
              </option>)) }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de Pagamento:
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
