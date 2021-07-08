import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <div>
          Despesa Total:
          <span data-testid="total-field"> 0 </span>
        </div>
        <div>
          Moeda:
          <span data-testid="header-currency-field"> BRL </span>
        </div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((curr) => (
                curr !== 'USDT' ? <option id={ curr }>{curr}</option> : null))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="freeTime">Lazer</option>
              <option value="health">Saúde</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any),
};

Form.defaultProps = {
  currencies: {},
};
