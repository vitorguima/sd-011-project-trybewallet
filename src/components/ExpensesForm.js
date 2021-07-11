import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { fetchApiCurrency } = this.props;
    fetchApiCurrency();
  }

  currenciesOptions() {
    const { currencies } = this.props;
    return currencies.filter((curr) => curr !== 'USDT');
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            valor
            <input id="valor" type="text" name="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" name="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {this.currenciesOptions().map((moeda) => (
                <option key={ moeda } value={ moeda }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select id="método de pagamento" name="método de pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartão-de-credito">Cartão de crédito</option>
              <option value="cartão-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
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
  fetchApiCurrency: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  currencies: PropTypes.shape({ Object }),
}.isRequired;
