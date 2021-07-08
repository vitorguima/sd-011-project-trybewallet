import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: '',
      description: '',
      // currency: '',
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
          id= { name }
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
        <select aria-labelledby={ name } value={ standard } id= { name }>
          { arraySelect.map((item, index) => (
            <option key={ `${name}-${index}` } value={ `${name}-${index}` }>
              { item }
            </option>
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
    const currencies = ['BRL', 'DOLAR'];
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { totalValue, description } = this.state;

    const { getCurrencies } = this.props;
    console.log(getCurrencies);

    return (
      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
        <form>
          { this.createInput('totalValue', 'Valor', totalValue) }
          { this.createInput('description', 'Descrição', description) }
          { this.createSelect('coin', 'Moeda', currencies, 'BRL')}
          { this.createSelect(
            'payment', 'Método de pagamento', payments, 'Cartão de crédito',
          )}
          { this.createSelect('expense', 'Tag', expense, 'Alimentação') }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  // currenciesGlobal: state.
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApi())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  userEmail: PropTypes.string.isRequired,
});
