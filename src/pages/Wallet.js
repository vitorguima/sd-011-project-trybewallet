import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/walletActionsAPI';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { getEmail, getCurrencie } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">
          <div>
            { getEmail }
          </div>
          <div data-testid="total-field">Despesa Total R$: 0 </div>
          <div data-testid="header-currency-field">Câmbio: BRL </div>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea type="text" name="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { getCurrencie.map((currency, index) => (
                <option key={ index }>{ currency }</option>)) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select>
              <option value="cash">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select>
              <option value="food">Alimentação</option>
              <option value="freeTime">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getCurrencie: state.wallet.currencies, // array de objetos chega
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrencie: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
