import React from 'react';
import './Style.css';

const minPassword = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.confirmedEmail = this.confirmedEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  // peguei uma dica de como altenticar email no atackoverflow
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  confirmedEmail(email) {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }
  // confirmedPassword() {
  //   const passwordPattern =
  // }

  buttonLogin() {
    const { email, password } = this.state;

    if (email.length <= 0 || password.length < minPassword
        || !this.confirmedEmail(email)) {
      return <button type="button" disabled>Entrar</button>;
    }
    return <button type="button">Entrar</button>;
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="body-login">
        <h2>Trybe Wallet</h2>
        <label htmlFor="email">
          E-mail
          <input
            className="input-email"
            value={ email }
            type="email"
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className="input-password"
            minLength="6"
            value={ password }
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <div className="button-login">
          {this.buttonLogin()}
        </div>
      </div>);
  }
}

export default Login;
