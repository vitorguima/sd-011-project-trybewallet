import React, { Component } from 'react';
import ButtonAdd from './ButtonAdd';
// import { connect } from 'react-redux';
import CompOptionMoed from './CompOptionMoed';

class FormWallet extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input id="desc" type="text" />
        </label>
        <label htmlFor="moed">
          Moeda
          <select name="moed" id="moed">
            <CompOptionMoed />
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="methoddesp">
          Tag
          <select name="methoddesp" id="methoddesp">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <ButtonAdd />
      </form>
    );
  }
}

// const getInfosRedux = (state) => ({
//   statRedux: state.wallet,
// });

export default FormWallet;
