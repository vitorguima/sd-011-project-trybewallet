import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiRequest, dispatchExpense } from '../actions';
import HeaderWallet from './HeaderWallet';
import ButtonAddExpense from './ButtonAddExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.AddExpense = this.AddExpense.bind(this);
  }

  componentDidMount() {
    const { FetchApi } = this.props;
    FetchApi();
  }

  async AddExpense() {
    const { DispatchExp, expenses, currencyApi } = this.props;
    const { form } = document.forms;
    await DispatchExp([{
      id: expenses.length,
      value: form.Valor.value,
      description: form.Description.value,
      currency: form.Coin.value,
      method: form.Method.value,
      tag: form.Category.value,
      exchangeRates: currencyApi,
    }]);
  }

  render() {
    const { currencyApi } = this.props;
    return (
      <>
        <HeaderWallet />
        <form id="form">
          <label htmlFor="Valor">
            Valor
            <input type="number" name="input-valor" id="Valor" />
          </label>
          <label htmlFor="Description">
            Descrição
            <input name="input-descricao" id="Description" />
          </label>
          <label htmlFor="Coin">
            Moeda
            <select id="Coin">
              {
                Object.keys(currencyApi).map((coin, index) => (
                  coin !== 'USDT' ? <option key={ index } value={ coin }>{coin}</option>
                    : null
                ))
              }
            </select>
          </label>
          <label htmlFor="Method">
            Método de pagamento
            <select id="Method">
              <option valor="monney">Dinheiro</option>
              <option valor="credit">Cartão de crédito</option>
              <option valor="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Category">
            Tag
            <select id="Category">
              <option valor="alimentation">Alimentação</option>
              <option valor="fun">Lazer</option>
              <option valor="work">Trabalho</option>
              <option valor="transport">Transporte</option>
              <option valor="health">Saúde</option>
            </select>
          </label>
          <ButtonAddExpense onClick={ this.AddExpense } />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyApi: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  FetchApi: (state) => dispatch(fetchApiRequest(state)),
  DispatchExp: (state) => dispatch(dispatchExpense(state)),
});

Wallet.propTypes = {
  FetchApi: PropTypes.func.isRequired,
  DispatchExp: PropTypes.func.isRequired,
  currencyApi: PropTypes.objectOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
