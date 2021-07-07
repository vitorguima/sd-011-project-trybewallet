import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.controlButton = this.controlButton.bind(this);
  }

  handleEvent(event) {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    }, () => this.controlButton());
  }

  verifyValidEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  verifyValidPassword(password) {
    const minLength = 6;
    return (password.length >= minLength);
  }

  controlButton() {
    const { inputEmail, inputPassword } = this.state;
    const loginButton = document.querySelectorAll('.myButton')[0];
    if (this.verifyValidEmail(inputEmail) && this.verifyValidPassword(inputPassword)) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          name="inputEmail"
          onChange={ this.handleEvent }
          value={ inputEmail }
          type="text"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          name="inputPassword"
          onChange={ this.handleEvent }
          value={ inputPassword }
          type="password"
          placeholder="Senha"
        />
        <input type="button" className="myButton" disabled value="Entrar" />
      </div>
    );
  }
}

export default Login;
