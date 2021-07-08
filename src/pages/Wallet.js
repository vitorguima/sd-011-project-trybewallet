import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from './HeaderWallet';
import InputText from './InputText';
import Select from './Select';
import { fetchApi } from '../actions';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagTypes = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  handleEvent({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <HeaderWallet email={ email } />
        <form>
          <InputText
            id="value"
            label="Valor"
            onChange={ this.handleEvent }
            valor={ value }
          />
          <InputText
            id="description"
            label="Descrição"
            onChange={ this.handleEvent }
            valor={ description }
          />
          <Select
            id="currency"
            label="Moeda"
            arrayBd={ currencies }
            onChange={ this.handleEvent }
            valor={ currency }
          />
          <Select
            id="method"
            label="Método de pagamento"
            arrayBd={ paymentMethod }
            onChange={ this.handleEvent }
            valor={ method }
          />
          <Select
            id="tag"
            label="Tag"
            arrayBd={ tagTypes }
            onChange={ this.handleEvent }
            valor={ tag }
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  requestCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
