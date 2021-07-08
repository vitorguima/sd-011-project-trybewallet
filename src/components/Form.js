import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const { fetchCurrenciesApi } = this.props;
    this.setState(
      async () => {
        await fetchCurrenciesApi();
        const { currencies } = this.props;
        const currArr = Object.values(currencies);
        currArr.splice(1, 1);
        this.setState({
          currencies: currArr,
        });
      },
    );
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" name="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" name="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda">
              { currencies.map((code, index) => (
                <option key={ index } value={ code.code }>{code.code}</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select name="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag:
            <select name="categoria">
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesApi: () => dispatch(fetchCurrencies()),
});

Form.propTypes = {
  fetchCurrenciesApi: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
