import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
    };

    this.buttonHandle = this.buttonHandle.bind(this);
  }

  handler(e) {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  }

  buttonHandle() {
    const { inputEmail, inputPassword } = this.state;
    const emailValidate = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordLength = 6;
    if (emailValidate.test(inputEmail) && inputPassword.length === passwordLength) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <form className="login-form">
          <label htmlFor="login-email">
            Login
            <input
              type="email"
              data-testid="email-input"
              className="login-email"
              onChange={ (e) => this.handler(e) }
              id="email"
              name="inputEmail"
            />
          </label>
          <label htmlFor="login-pass">
            Senha
            <input
              type="password"
              data-testid="password-input"
              onChange={ (e) => this.handler(e) }
              className="login-pass"
              id="password"
              name="inputPassword"
            />
          </label>
          <button type="submit" disabled={ this.buttonHandle() }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
