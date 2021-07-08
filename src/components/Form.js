import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { expenses } = this.props;

    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() { /* Função feita com ajuda do Tales Coelho */
    const { expenses, getApi } = this.props;
    getApi(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  render() {
    const { coins } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" onChange={ this.handleChange } />
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
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" onChange={ this.handleChange }>
              {coins.map((coin) => <option key={ coin }>{coin}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method" onChange={ this.handleChange }>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" onChange={ this.handleChange }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  getCurrency: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: (coin) => dispatch(actions.getApi(coin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
