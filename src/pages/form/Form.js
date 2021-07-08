import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
    };
    this.handlerEmail = this.handlerEmail.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.validateEmailandPassword = this.validateEmailandPassword.bind(this);
  }

  handlerEmail(event) {
    this.setState({ email: event.target.value },
      () => this.validateEmailandPassword());
  }

  handlerPassword(event) {
    this.setState({ password: event.target.value },
      () => this.validateEmailandPassword());
  }

  validateEmailandPassword() {
    const { email, password } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const regexValidation = regex.test(email);
    const validPassword = password.length;
    const minLenght = 6;
    if (validPassword >= minLenght && regexValidation === true) {
      this.setState({ emailIsValid: regexValidation });
    }
  }

  render() {
    const { emailIsValid } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            onChange={ this.handlerEmail }
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            onChange={ this.handlerPassword }
            type="password"
            data-testid="password-input"
          />
        </label>
        <button
          id="button-validation"
          type="button"
          disabled={ !emailIsValid }
          onClick={ <Link to="/carteira/" /> }
        >
          Entrar
        </button>
      </form>

    );
  }
}

export default Form;
