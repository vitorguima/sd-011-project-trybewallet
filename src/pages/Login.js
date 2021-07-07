import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <label htmlFor="email">
          <input
            value={ email }
            type="email"
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            value={ password }
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
