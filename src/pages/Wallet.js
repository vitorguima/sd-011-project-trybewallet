import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

export class Wallet extends Component {
  form() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select name="coin" id="coin">
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>
                { coin }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="Alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email, total } = this.props;
    return (
      <div>
        <header>
          <p>
            <span>Usuário: </span>
            <span data-testid="email-field">{ email }</span>
          </p>
          <p>
            <span>Despesa Total: </span>
            <span data-testid="total-field">{total || '0'}</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        { this.form() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
  loading: state.wallet.loading,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPosts: dispatch(fetchPosts()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
  loading: PropTypes.bool,
  dispatchFetchPosts: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
