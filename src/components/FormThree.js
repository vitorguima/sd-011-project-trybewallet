import React from 'react';

class FormTwo extends Component {
  constructor() {
    super();
    this.state = {
      tag: '',
    };
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="despesa-input">
          Tag
          <select id="despesa-input" name="despesa">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

export default FormTwo;