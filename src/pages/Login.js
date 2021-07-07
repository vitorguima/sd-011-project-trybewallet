import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-wrapper">
        <form>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </form>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
