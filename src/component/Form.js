import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOption = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencyAcronyms } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            {currencyAcronyms
              .map((curr, index) => <option key={ index }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="methods">
          Método de Pagamento:
          <select name="methods" id="methods">
            {methodPayment
              .map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="categories">
          Tag
          <select name="categories" id="categories">
            {tagOption
              .map((category, index) => <option key={ index }>{category}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyAcronyms: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencyAcronyms: PropTypes.arrayOf(PropTypes.string),
  getCurrency: PropTypes.func,
}.isRequired;
