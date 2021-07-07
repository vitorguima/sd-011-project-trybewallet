import React from 'react';
import '../styles/login.css';

class Login extends React.Component {
  handleClick(event) {
    // return event.preventDefault(event); // retirar esse prevent
  }

  render() {
    return (
      <form className="login">
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            name="email"
            type="email"
            // value={ redux } onChange={ hendleChange }
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            name="password"
            type="password"
            minLength="6"
            // value={ redux } onChange={ hendleChange }
            required
          />
          <button
            type="submit"
            onClick={ (event) => this.handleClick(event) } // alterar essa função
          >
            Entrar
          </button>
        </label>
      </form>
    );
  }
}

export default Login;
