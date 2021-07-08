import React from 'react';
import PropTypes from 'prop-types';

class SpendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spendsValue: 0,
      spendsDescribe: '',
      spendCategory: '',
      // currency: '',
      paymentMethod: '',
    };
    this.inputsTexts = this.inputsTexts.bind(this);
    this.selectInputs = this.selectInputs.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  inputsTexts() {
    const { spendsValue, spendsDescribe } = this.state;
    return (
      <fieldset>
        <label htmlFor="spendsValue">
          Valor
          <input
            id="spendsValue"
            type="number"
            value={ spendsValue }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="spendsDescribe">
          Descrição
          <input
            id="spendsDescribe"
            type="text"
            value={ spendsDescribe }
            onChange={ this.handleChange }
          />
        </label>
      </fieldset>
    );
  }

  selectInputs() {
    const {
      paymentMethod,
      spendCategory,
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
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select
            id="paymentMethod"
            value={ paymentMethod }
            onChange={ this.handleChange }
          >
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="spendCategory">
          Tag
          <select
            id="spendCategory"
            value={ spendCategory }
            onChange={ this.handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    return (
      <form>
        {this.inputsTexts()}
        {this.selectInputs()}
      </form>
    );
  }
}

export default SpendForm;

SpendForm.propTypes = {
  acronyms: PropTypes.arrayOf(PropTypes.string).isRequired,
};
