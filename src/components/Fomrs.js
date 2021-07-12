import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormsBtn from './FormsBtn';

class Fomrs extends Component {
  constructor(props) {
    super(props);
    this.up = this.up.bind(this);
  }

  up(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { currency = [] } = this.props;
    return (
      <form className="forms" id="forms">
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.up }
            id="value"
            className="Valor"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea onChange={ this.up } id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select onChange={ this.up } id="currency">
            {
              currency
                .map((item, index) => (
                  <option key={ index } value={ item.code }>{item.code}</option>))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select onChange={ this.up } id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select onChange={ this.up } id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <FormsBtn toma={ this.state } />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencyList,
});

export default connect(mapStateToProps)(Fomrs);

Fomrs.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.object).isRequired,
};
