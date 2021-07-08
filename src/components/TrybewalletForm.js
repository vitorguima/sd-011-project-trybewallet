import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../actions';

class TrybewalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      // value: 0,
      // description: '',
      // coin: '',
      // payment: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, fetchCoinsAction } = this.props;
    dispatch(fetchCoinsAction());
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { coins } = this.props;
    return (
      <form className="trybewallet-form">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select name="coin" id="coin" onChange={ this.handleChange }>
            { coins.map(({ code }) => (
              <option key={ code } value={ code }>{ code }</option>
            )) }
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment" onChange={ this.handleChange }>
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchCoinsAction: fetchCoins,
});

TrybewalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchCoinsAction: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrybewalletForm);
