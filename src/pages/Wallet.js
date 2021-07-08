import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  createMethods(array) {
    return array.map((term) => <option key={ term }>{ term }</option>);
  }

  render() {
    const { email } = this.props;
    const totalSpend = 0;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{`Despesa total: ${totalSpend}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="inp-val">
            Valor:
            <input type="number" name="value" id="inp-val" />
          </label>
          <label htmlFor="inp-desc">
            Descrição:
            <input type="text" name="desc" id="inp-desc" />
          </label>
          <label htmlFor="slct-unt">
            Moeda:
            <select name="unity" id="slct-unt" aria-label="Moeda:" />
          </label>
          <label htmlFor="slct-mthd">
            Método de pagamento:
            <select name="method" id="slct-mthd">
              {this.createMethods(methods)}
            </select>
          </label>
          <label htmlFor="slct-tag">
            Tag:
            <select name="tag" id="slct-tag">
              {this.createMethods(tags)}
            </select>
          </label>
        </form>

      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
