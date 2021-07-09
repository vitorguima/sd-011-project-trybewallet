import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  createInput(name, label, stateKey) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type="text"
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        />
      </label>
    );
  }

  createSelect(name, label, arraySelect, standard) {
    return (
      <label htmlFor={ name }>
        { label }
        <select value={ standard } id={ name }>
          { arraySelect.map((item) => (
            <option key={ item } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { totalValue, description } = this.state;
    const { currencies, loadingCurrencies } = this.props;
    delete currencies.USDT;
    const currenciesArray = Object.keys(currencies).map((currency) => currency);

    return (

      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
        { loadingCurrencies ? <p>Carregando...</p> : (
          <form>
            { this.createInput('totalValue', 'Valor', totalValue) }
            { this.createInput('description', 'Descrição', description) }
            { this.createSelect('coin', 'Moeda', currenciesArray, 'BRL')}
            { this.createSelect('payment', 'Método de pagamento', payments, 'Dinheiro')}
            { this.createSelect('expense', 'Tag', expense, 'Alimentação') }
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  loadingCurrencies: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  userEmail: PropTypes.string,
  currencies: PropTypes.shape({ Object }),
  loadingCurrencies: PropTypes.bool,
}).isRequired;
