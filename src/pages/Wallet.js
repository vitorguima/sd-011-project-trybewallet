import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spent: 0,
    };
  }

  render() {
    const { spent } = this.state;
    const { email } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>
        <header>
          <p><span data-testid="email-field">{ email }</span></p>
          <p><span data-testid="total-field">{ spent }</span></p>
          <p><span data-testid="header-currency-field">BRL</span></p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="coin">
            Moeda
            <select name="coin" id="coin">{}</select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select name="pagamento" id="pagamento">
              <option>Selecione método de pagamento</option>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Selecione categoria de despesa</option>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
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
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
