import React from 'react';
import { connect } from 'react-redux';

import FormCurrencys from '../FormCurrencys';

import './FormMoney.css';

class FormMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      // currency: '',
      // paymentMethod: '',
      // tag: '',
      // description: '',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <label htmlFor="value" className="value-label">
          Valor:
          <input
            type="number"
            name="value"
            onChange={ this.handleValueChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" maxLength="100" cols="30" rows="2" />
        </label>
        <FormCurrencys />
        <label htmlFor="paymentMethod">
          <select name="paymentMethod">
            <option value="money">Dinheiro</option>
            <option value="credit">Crédido</option>
            <option value="debt">Débito</option>
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Tag:
          <select name="paymentMethod">
            <option value="alimentation">Alimentacao</option>
            <option value="laze">lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
// sendExpenses: (expenses) => dispatch()
// })

export default connect(null, null)(FormMoney);
