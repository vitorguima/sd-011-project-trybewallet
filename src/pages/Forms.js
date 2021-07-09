import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    const { getCurrencie } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="descricao" id="description" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { getCurrencie.map((currency, index) => (
                <option key={ index }>{ currency }</option>)) }
            </select>
          </label>
          <label htmlFor="payment-mode">
            Método de pagamento
            <select id="payment-mode">
              <option value="cash">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="freeTime">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrencie: state.wallet.currencies, // array de objetos chega
});

Forms.propTypes = {
  getCurrencie: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(Forms);
