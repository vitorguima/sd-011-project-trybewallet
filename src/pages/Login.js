import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passaword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonLogin() {
    const { email, passaword } = this.state;
    const emailValid = /\S+@\S+\.\S+/;
    const passawordCharacters = 6;
    if (emailValid.test(email) === true && passaword.length >= passawordCharacters) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <header>Trybe Wallet</header>
        <div className="div">
          <form>
            <label htmlFor="email-imput">
              Email
              <input
                type="text"
                name="email"
                data-testid="email-input"
                onChange={ this.handleChange }
                placeholder="E-mail"
              />
            </label>

            <label htmlFor="password-input">
              Senha
              <input
                type="text"
                name="passaword"
                data-testid="password-input"
                onChange={ this.handleChange }
                placeholder="Passaword"
              />
            </label>

            <button type="button" disabled={ this.buttonLogin() }>
              <Link to="/carteira">
                Entrar
              </Link>
            </button>
          </form>
        </div>
        <footer>Desenvolvido por Leandro Lopes</footer>
      </div>
    );
  }
}

export default Login;
