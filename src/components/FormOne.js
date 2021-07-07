import React from 'react';

class FormOne extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      description: '',
    };
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="valor-input">
          Valor
          <input type="number" name="valor" id="valor-input"/>
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" name="description" id="description-input"/>
        </label>
      </fieldset>
    );
  }
}

export default FormOne;
