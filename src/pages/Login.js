import React from 'react';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChangeInput({ target }) {
this.setState({
  [target.name]: target.value,
})
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Informe seu email"
          name="email"
          value={email}
          onChange={this.handleChangeInput}
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Informe sua senha"
          name="password"
          value={password}
          onChange={this.handleChangeInput}
        />
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
