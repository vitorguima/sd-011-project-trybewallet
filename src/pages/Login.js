import React from 'react';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div>
        <header>Trybe Wallet</header>
        <div className="div">
          <form>
            <label htmlFor="email-imput">
              Email
              <input type="text" data-testid="email-input" />
            </label>

            <label htmlFor="password-input">
              Senha
              <input type="text" data-testid="password-input" />
            </label>

            <button type="button"> Entrar </button>
          </form>
        </div>
        <footer>Desenvolvido por Leandro Lopes</footer>
      </div>
    );
  }
}

export default Login;
