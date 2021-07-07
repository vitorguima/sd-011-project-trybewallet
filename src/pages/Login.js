import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  validateEmail(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(String(email).toLowerCase());
  }

  buttonValidation() {
    const { email, password } = this.state;
    const minEmailLength = 6;

    if (email.length === 0 || password.length === 0) {
      return (
        <button
          type="button"
          disabled
        >
          Entrar
        </button>
      );
    }

    if (!this.validateEmail(email) || password.length < minEmailLength) {
      return (
        <button
          type="button"
          disabled
        >
          Entrar
        </button>
      );
    }

    return (
      <button
        type="button"
      >
        Entrar
      </button>
    );
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-wrapper">
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </form>
        {this.buttonValidation()}
      </div>
    );
  }
}

export default Login;
