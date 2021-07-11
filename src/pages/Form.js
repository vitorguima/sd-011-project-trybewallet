import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Valor from './Valor';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { getCoin } = this.props;
    return (
      <form>
        <Valor handleChange={ this.handleChange } />
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            {getCoin.map((money, index) => <option key={ index }>{ money }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            placeholder="Digite a descrição do produto"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCoin: state.wallet.currencies,
});

Form.propTypes = ({
  getCoin: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

export default connect(mapStateToProps, null)(Form);
