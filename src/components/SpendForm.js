import React from 'react';
import PropTypes from 'prop-types';

class SpendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      tag: '',
      currency: '',
      method: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputsTexts = this.inputsTexts.bind(this);
    this.selectInputs = this.selectInputs.bind(this);
    this.sendValues = this.sendValues.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  inputsTexts() {
    const { value, description } = this.state;
    return (
      <fieldset>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </fieldset>
    );
  }

  selectInputs() {
    const {
      method,
      tag,
    } = this.state;
    const { acronyms } = this.props;
    return (
      <fieldset>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            {acronyms.map((option, index) => (
              <option value={ option } key={ `${option}${index}` }>{ option }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  sendValues(event) {
    event.preventDefault();
    const { addExpense } = this.props;
    const expense = { ...this.state };
    addExpense(expense);
  }

  render() {
    return (
      <form>
        {this.inputsTexts()}
        {this.selectInputs()}
        <button type="button" onClick={ this.sendValues }>Adicionar despesa</button>
      </form>
    );
  }
}

export default SpendForm;

SpendForm.propTypes = {
  acronyms: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};
