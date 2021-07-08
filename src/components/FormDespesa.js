import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mountExpenses, fetchMoedas } from '../actions';

class FormDespesa extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const { dispatchFetchMoedas } = this.props;
    dispatchFetchMoedas();
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderForm1() {
    const { valor, descricao, moeda } = this.state;
    const { currencies } = this.props;
    const moedas = Object.keys(currencies).filter((code) => code !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
            value={ valor }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <br />
          <textarea
            name="description"
            id="description"
            value={ descricao }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleInput }
            value={ moeda }
          >
            {moedas.map((res, i) => <option key={ i } value={ res }>{res}</option>)}
          </select>
        </label>
      </form>
    );
  }

  renderForm2() {
    const { metod, tag } = this.state;
    return (
      <form>
        <br />
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" value={ metod } onChange={ this.handleInput }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleInput }>
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

  render() {
    const { MountExpenses, exchange, dispatchFetchMoedas } = this.props;
    return (
      <div>
        {this.renderForm1()}
        {this.renderForm2()}
        <br />
        <button
          type="button"
          onClick={ () => {
            // dispatchfetchExchange();
            dispatchFetchMoedas();
            MountExpenses({ ...this.state, exchangeRates: exchange });
            this.setState((prevState) => ({
              value: '',
              description: '',
              currency: 'USD',
              method: 'Dinheiro',
              tag: 'Alimentação',
              id: prevState.id + 1,
            }));
          } }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchange: state.wallet.exchange,
});

const mapDispatchToProps = (dispatch) => ({
  MountExpenses: (state) => dispatch(mountExpenses(state)),
  dispatchFetchMoedas: (state) => dispatch(fetchMoedas(state)),
  // dispatchfetchExchange: (state) => dispatch(fetchExchange(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesa);

FormDespesa.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  dispatchFetchMoedas: PropTypes.func.isRequired,
  MountExpenses: PropTypes.func.isRequired,
  exchange: PropTypes.objectOf(Object).isRequired,
};
