import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.verifyEmailAndPassword = this.verifyEmailAndPassword.bind(this);
  }

  verifyEmailAndPassword() {
    const { senha, email } = this.state;
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      .test(email);
    const maxLenght = 6;
    if (reg && senha.length >= maxLenght) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="Insira seu email"
          onChange={ (e) => this.setState({ email: e.target.value }) }
        />
        <input
          data-testid="password-input"
          placeholder="Insira sua senha"
          onChange={ (e) => this.setState({ senha: e.target.value }) }
        />
        <button type="submit" disabled={ this.verifyEmailAndPassword() }>Entrar</button>
      </form>
    );
  }
}

export default Login;
