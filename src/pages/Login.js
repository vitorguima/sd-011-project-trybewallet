import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      enabledBtn: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  checkUserData() {
    const { email, password } = this.state;
    const minPassword = 6;

    if (email.includes('@') && email.includes('.com') && password.length >= minPassword) {
      this.setState({
        enabledBtn: false,
      });
    }
  }

  handleUserInput({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => this.checkUserData());
  }

  render() {
    const { enabledBtn } = this.state;

    return (
      <div>
        <form>
          <fieldset>
            <input
              type="email"
              id="email-input"
              name="email"
              data-testid="email-input"
              placeholder="Digite seu e-mail"
              onChange={ this.handleUserInput }
            />
            <input
              type="password"
              id="password-input"
              name="password"
              data-testid="password-input"
              placeholder="Digite sua senha"
              onChange={ this.handleUserInput }
            />
            <button
              type="button"
              disabled={ enabledBtn }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
