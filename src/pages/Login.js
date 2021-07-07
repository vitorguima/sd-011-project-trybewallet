import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi; // (regex) https://regexr.comm/2ri2c
    const six = 6;
    return (
      <div>
        <h3>Login</h3>

        <input
          data-testid="email-input"
          type="text"
          placeholder="E-mail"
          onChange={ (event) => this.setState({ email: event.target.value }) }
        />

        <input
          data-testid="password-input"
          type="text"
          placeholder="Senha"
          onChange={ (event) => this.setState({ password: event.target.value }) }

        />

        <Link to="/carteira">
          <button
            type="submit"
            disabled={
              !(email.match(emailRegex)) || password.length < six // validação de email e senha (six por conta do magicNumber)
            }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

export default Login;
