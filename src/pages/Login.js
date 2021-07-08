import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.desabledButton = this.desabledButton.bind(this);
    this.enebleButton = this.enebleButton.bind(this);
  }

  componentDidMount() {
    const login = false;
    if (!login) {
      return this.desabledButton();
    }
  }

  desabledButton() {
    document.getElementById('button').disabled = true;
  }

  enebleButton() {
    document.getElementById('botao').disabled = false;
  }

  render() {
    return (
      <div>
        <label data-testid="email-input" htmlFor="email-input">
          <input type="email" placeholder="E-mail" />
        </label>
        <label data-testid="password-input" htmlFor="password-input">
          <input type="password" placeholder="Senha" />
        </label>
        <button id="button" type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
