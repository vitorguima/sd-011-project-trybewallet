import React from 'react';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="headerWallet">
          <h1>TrybeWallet</h1>
          <h3>
            Seja bem vindo:
            <span data-testid="email-field">{email}</span>
          </h3>
          <h5 data-testid="total-field">
            Despesa total:
            <span data-testid="header-currency-field">BRL</span>
          </h5>
        </header>
        <label htmlFor="valor">
          Valor:
          <input type="number" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select>
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de Pagamento:
          <select>
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select>
            <option>Alimentação</option>
          </select>
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" />
        </label>
      </div>
    );
  }
}

const stateProps = (state) => ({
  email: state.user.email,
});

export default connect(stateProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
