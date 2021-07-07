import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WalletForm = (props) => {
  const { coins } = props;

  return (
    <form>
      <label htmlFor="valueInput">
        Valor:
        <input id="valueInput" />
      </label>
      <label htmlFor="descriptionInput">
        Descrição:
        <input id="descriptionInput" />
      </label>
      <label htmlFor="coinSelect">
        Moeda:
        <select id="coinSelect">
          { coins && coins.map((coin) => (
            <option key={ coin }>{ coin }</option>
          )) }
        </select>
      </label>
      <label htmlFor="paymentMethodSelect">
        Método de pagamento:
        <select id="paymentMethodSelect">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tagSelect">
        Tag:
        <select id="tagSelect">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </form>
  );
};

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
});

WalletForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string),
};

WalletForm.defaultProps = {
  coins: [],
};

export default connect(mapStateToProps)(WalletForm);
