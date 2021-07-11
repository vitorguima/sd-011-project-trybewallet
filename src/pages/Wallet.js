import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiRequest } from '../actions';
import HeaderWallet from './HeaderWallet';
import ButtonAddExpense from './ButtonAddExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: 'newCurrency',
    };
  }

  componentDidMount() {
    // const { currencyApi } = this.props;
    // const nameD = 'Dólar Americano/Real Brasileiro Turismo';
    // this.setState({
    //   exchangeRates: Object.entries(currencyApi)
    // })
  }

  AddExpense() {
    // const { currencyApi } = this.props;
    console.log(this.state);
  }

  render() {
    const { currencyApi } = this.props;
    return (
      <>
        <HeaderWallet />
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
              {
                Object.keys(currencyApi).map((coin, index) => (
                  coin !== 'USDT' ? <option key={ index } value={ coin }>{coin}</option>
                    : null
                ))
              }
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
            <ButtonAddExpense onClick={ this.AddExpense } />
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyApi: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  FetchApi: (state) => dispatch(fetchApiRequest(state)) });

Wallet.propTypes = {
  // FetchApi: PropTypes.func.isRequired,
  currencyApi: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
