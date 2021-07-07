import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: {},
    };

    this.fetchUnities = this.fetchUnities.bind(this);
  }

  async componentDidMount() {
    this.fetchUnities();
  }

  async fetchUnities() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await fetch(url)
      .then((result) => result.json());
    delete currencies.USDT;
    this.setState(() => ({
      currencies,
    }));
  }

  createMethods(array) {
    return array.map((term) => <option key={ term }>{ term }</option>);
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const currenciesIds = Object.keys(currencies);

    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ 0 }</span>
          <span data-testid="header-currency-field">BRL</span>
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
            <select name="unity" id="slct-unt" aria-label="Moeda:">
              {this.createMethods(currenciesIds)}
            </select>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
