import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };
    this.inputHandle = this.inputHandle.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
  }

  inputHandle({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputValidation() {
    const { email, password } = this.state;
    const emailValid = email.split('@').length === 2 && email.split('.com')[1] === '';
    const lengthPass = 5;
    if (emailValid && password.length > lengthPass) {
      this.setState({
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
      });
    }
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <div className="containnerLogin">
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={ email }
            id="email"
            data-testid="email-input"
            placeholder="digite seu e-mail"
            onChange={ this.inputHandle }
            onKeyUp={ this.inputValidation }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            placeholder="digite sua senha"
            onChange={ this.inputHandle }
            onKeyUp={ this.inputValidation }
          />
        </label>
        <button type="button" disabled={ !isValid }>Entrar</button>
      </div>
    );
  }
}

export default Login;
