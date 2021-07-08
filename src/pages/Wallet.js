import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      unities: {},
    };

    this.getUnities = this.getUnities.bind(this);
  }

  async componentDidMount() {
    this.getUnities();
  }

  async getUnities() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const unities = await fetch(url)
      .then((result) => result.json());
    delete unities.USDT;
    this.setState(() => ({
      unities,
    }));
  }

  createMethods(array) {
    return array.map((term) => <option key={ term }>{ term }</option>);
  }

  render() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { email } = this.props;
    const totalSpend = 0;
    const { unities } = this.state;
    const unitiesKey = Object.keys(unities);
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{`Despesa total: ${totalSpend}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="desc" id="description" />
          </label>
          <label htmlFor="unity">
            Moeda:
            <select name="unity" id="unity" aria-label="Moeda:">
              {' '}
              {this.createMethods(unitiesKey)}
              {' '}
            </select>
          </label>
          <label htmlFor="tagSelect">
            Método de pagamento:
            <select name="method" id="tagSelect">
              {this.createMethods(methods)}
            </select>
          </label>
          <label htmlFor="tags">
            Tag:
            <select name="tag" id="tags">
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
