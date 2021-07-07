import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      payMethod: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  handleChange() {
    const { name, value } = this.state;
    this.setState({
      [name]: value,
    });
  }

  labelValueDescription() {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea name="description" id="description" />
        </label>
      </>
    );
  }

  labelPayMethodTag() {
    return (
      <>
        <label htmlFor="payMethod">
          Método de pagamento
          <select id="payMethod">
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
      </>
    );
  }

  render() {
    const { stateCurrencies, stateIsLoading, dispatchExpenses } = this.props;
    if (stateIsLoading) {
      return (
        <>
          <Header />
          <p>Loading...</p>
        </>
      );
    }
    return (
      <>
        <Header />
        <form>
          {this.labelValueDescription()}
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {stateCurrencies.map((e, i) => <option key={ i }>{e.code}</option>)}
            </select>
          </label>
          {this.labelPayMethodTag()}
        </form>
        <button
          type="button"
          onClick={ () => {
            dispatchExpenses(this.state);
          } }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  stateCurrencies: state.wallet.currencies,
  stateIsLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateIsLoading: PropTypes.bool.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
