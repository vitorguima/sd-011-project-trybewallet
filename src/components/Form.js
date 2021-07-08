import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { currencySave } = this.props;
    currencySave();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies)
    const keysApi = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select type="text" name="currency" id="currency">
            {keysApi.map((key) => <option key={ key }>{ key }</option>)}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select type="text" name="tag" id="tag">
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
}

const mapDispatchToProps = (dispatch) => ({
  currencySave: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencySave: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
