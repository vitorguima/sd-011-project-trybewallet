import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class ExpensesForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ApiData: {},
  //   };
  // }

  async componentDidMount() {
    // const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  currenciesOptions() {
    const { currencies } = this.props;
    const moedas = Object.keys(currencies).filter((curr) => curr !== 'USDT');
    moedas.map((moeda) => <option key={ moeda } value={ moeda }>{moeda}</option>);
    return moedas;
  }

  render() {
    return (
      <form className="expenses-form">
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            type="number"
            placeholder="0"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency">
            {this.currenciesOptions()}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select name="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select name="tag">
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
  fetchCurrency: () => dispatch(fetchCurrency()),
});

// login.propTypes = {
//   submitLogIn: PropTypes.func.isRequired,
//   history: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
