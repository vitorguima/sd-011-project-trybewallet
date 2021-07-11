import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCotationThunk } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { getCotation } = this.props;
    getCotation();
  }

  render() {
    const { currencies } = this.props;
    const currenciesArray = Object.values(currencies);
    const currenciesFiltered = currenciesArray.filter((item) => item.codein !== 'BRLT');
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency">
              { currenciesFiltered.map((curr, index) => (
                <option key={ index }>
                  { curr.code }
                </option>)) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" name="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="alimentaçao">Alimentação</option>
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
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCotation: () => dispatch(getCotationThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCotation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
