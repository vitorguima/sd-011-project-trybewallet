import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm({ target: { id, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      [id]: value,
    }));
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ this.handleForm }
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ this.handleForm }
            required
          />
        </label>
        <button type="button">Enviar</button>
      </form>
    );
  }
}

export default Login;
