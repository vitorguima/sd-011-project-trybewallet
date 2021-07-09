import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins, testeExpencies } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.stateToRedux = this.stateToRedux.bind(this);
  }

  componentDidMount() {
    const { mostraMoeda } = this.props;
    mostraMoeda();
  }

  async stateToRedux() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    this.setState({ exchangeRates: data });
    const { adicionaEstadoGlobal } = this.props;
    const { id } = this.state;
    const newId = id + 1;
    adicionaEstadoGlobal(this.state);
    this.setState({
      id: newId,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
    });
    document.getElementById('forms').reset();
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form id="forms">
          <label htmlFor="value">
            valor
            <input type="number" name="value" id="value" onChange={ this.handleInput } />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea name="description" id="description" onChange={ this.handleInput } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency" onChange={ this.handleInput }>
              {currencies.filter((currencie) => currencie !== 'USDT')
                .map((curr) => <option name={ curr } key={ curr }>{curr}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" id="method" onChange={ this.handleInput }>
              <option> </option>
              <option name="dinheiro">Dinheiro</option>
              <option name="cartão de crédito">Cartão de crédito</option>
              <option name="cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag" onChange={ this.handleInput }>
            Tag
            <select name="tag" id="tag">
              <option> </option>
              <option name="alimentação">Alimentação</option>
              <option name="lazer">Lazer</option>
              <option name="trabalho">Trabalho</option>
              <option name="transporte">Transporte</option>
              <option name="saúde">Saúde</option>
            </select>
            <button type="button" onClick={ this.stateToRedux }>Adicionar despesa</button>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  mostraMoeda: () => dispatch(fetchCoins()),
  adicionaEstadoGlobal: (state) => dispatch(testeExpencies(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  adicionaEstadoGlobal: PropTypes.func.isRequired,
  mostraMoeda: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
