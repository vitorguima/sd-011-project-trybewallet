import React from 'react';

class FormTwo extends Component {
  constructor() {
    super();
    this.state = {
      moeda: [],
      pagamento: '',
    };
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="moeda-input">
          Moeda
          <select id="moeda-input" name="moeda">
            <option>empty</option>
          </select>
        </label>
        <label htmlFor="pagamento-input">
          Método de pagamento
          <select id="pagamento-input" name="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

export default FormTwo;
