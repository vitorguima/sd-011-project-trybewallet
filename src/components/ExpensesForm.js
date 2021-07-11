import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class ExpensesForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ApiData: {},
  //   };
  // }

  componentDidMount() {
    const { APICurrency } = this.props;
    APICurrency();
  }

  currenciesOptions() {
    const { currencies } = this.props;
    return currencies.filter((curr) => curr !== 'USDT');
  }

  render() {
    return (
      <form className="expenses-form">
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            placeholder="0"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {this.currenciesOptions().map((moeda) => (
              <option key={ moeda } value={ moeda }>{moeda}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select id="tag">
            <option value="cash">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  APICurrency: () => dispatch(fetchCurrency()),
});

ExpensesForm.propTypes = {
  APICurrency: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
