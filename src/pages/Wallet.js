import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoedasThunk } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      total: 0,
      // actualSelect: '',
    });

    this.optionGenerator = this.optionGenerator.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.headerGenerator = this.headerGenerator.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  changeSelect(e) {
    console.log(e);
  }

  optionGenerator() {
    const { apiMoedas } = this.props;
    if (apiMoedas !== undefined) {
      const allCoins = apiMoedas.map(((moeda) => Object.keys(moeda).filter((key) => (
        key !== 'USDT'))));
      return (
        <label htmlFor="currency-select">
          Moeda
          <select
            id="currency-select"
            name="currency"
            onChange={ (e) => this.changeSelect(e) }
          >
            {[...allCoins].map((coin) => coin.map((c, i) => (
              <option value={ c } key={ i }>{ c }</option>)))}
          </select>
        </label>
      );
    }
  }

  headerGenerator() {
    const { userEmail } = this.props;
    const { total } = this.state;
    return (
      <>
        <h1 data-testid="email-field">{ userEmail }</h1>
        <span data-testid="total-field">{ total }</span>
      </>
    );
  }

  render() {
    // const { apiMoedas } = this.props;
    // const teste = [...apiMoedas].map((t) => t.);
    return (
      <div>
        { this.headerGenerator() }
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>
          { this.optionGenerator() }
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
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
  apiMoedas: PropTypes.arrayOf.isRequired,
  getApi: PropTypes.func.isRequired,
};

const MapStateToProps = (state) => ({
  userEmail: state.user.email,
  apiMoedas: state.wallet.moedas,
});

const MapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(getMoedasThunk()),
});

export default connect(MapStateToProps, MapDispatchToProps)(Wallet);
