import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Description from './Description';

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
    const { otherFetch } = this.props;
    console.log(otherFetch);

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            placeholder="Digite o valor"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {otherFetch.map((value, index) => (<option key={ index }>{ value }</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <Description handleChange={ this.handleChange } />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  otherFetch: state.walletReducer.payload,
});

Form.propTypes = ({
  otherFetch: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

export default connect(mapStateToProps, null)(Form);
