import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value },
      () => this.validateData());
  }

  validateData() {
    const { email, password } = this.state;
    const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);
    const minLengthPassword = 6;

    this.setState({
      isDisabled: !(password.length >= minLengthPassword && validateEmail) });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="user-login">
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
