import React from 'react';
import '../CSS/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      invalidAcess: true,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkAcess = this.checkAcess.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.checkAcess());
  }

  checkAcess() {
    const { email, password } = this.state;
    const magicNumber = -1;
    const minLength = 5;
    if ((email.length > 0)
    && (password.length > minLength)
    && (email.search('@') !== magicNumber)
    && (email.lastIndexOf('@') !== email.length - 1)
    && (email.search('.') !== magicNumber)
    && (email.lastIndexOf('.') !== email.length - 1)) {
      this.setState({
        invalidAcess: false,
      });
    } else {
      this.setState({
        invalidAcess: true,
      });
    }
  }

  render() {
    const { invalidAcess } = this.state;
    return (
      <div className="Login-Page">
        <h1>The Wallet - Login</h1>
        <form className="login-form">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              className="input"
              placeholder="insira aqui o seu email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              className="input"
              placeholder="insira aqui a sua senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            className="Login-Button"
            disabled={ invalidAcess }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
