import React from 'react';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange() {

  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input onChange={ this.handlerChange } type="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="text" data-testid="password-input" />
        </label>
        <Button />
      </form>
    );
  }
}

export default Form;
