import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderValueIput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurencyInput() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          type="text"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
    );
  }

  renderPaymentInput() {
    const { payment } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          type="text"
          name="payment"
          id="payment"
          value={ payment }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          type="text"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <h1>Adicone nova despesa</h1>
        {this.renderValueIput()}
        {this.renderDescriptionInput()}
        {this.renderCurencyInput()}
        {this.renderPaymentInput()}
        {this.renderTagInput()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(ExpensesForm);
