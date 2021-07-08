import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    this.validateEmailAndPassword();
  }

  validateEmailAndPassword() {
    const { disabled, email, password } = this.state;
    const minLength = 4;

    if (email.split('').includes('@')
      && email.split('.').includes('com')
      && password.length > minLength
      && disabled) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { disabled, email, password } = this.state;
    return (
      <div className="login-container">
        <div className="login-card">
          <h3>Login</h3>
          <div className="input-container">
            <label htmlFor="email-input">
              <input
                value={ email }
                name="email"
                data-testid="email-input"
                type="email"
                placeholder="Digite seu email:"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password-input">
              <input
                value={ password }
                name="password"
                data-testid="password-input"
                type="password"
                placeholder="Digite sua senha:"
                onChange={ this.handleChange }
              />
            </label>
            <button type="button" disabled={ disabled }>Entrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
