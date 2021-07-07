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
    this.validateInputs = this.validateInputs.bind(this);
  }

  componentDidUpdate() {
    this.validateInputs();
  }

  validateInputs() {
    const { email, password, disabled } = this.state;
    const lengthNumberPassword = 6;
    const validateEmail = email.split('').includes('@')
      && email.split('.').includes('com');
    const verifyLengthPassword = password.length >= lengthNumberPassword;
    if (validateEmail && verifyLengthPassword && disabled) {
      this.setState({
        disabled: false,
      });
    } else if ((!validateEmail || !verifyLengthPassword) && !disabled) {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <div>Login</div>
        <div>
          <label htmlFor="email">
            <input
              name="email"
              value={ email }
              data-testid="email-input"
              type="email"
              placeholder="Digite o e-mail"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              name="password"
              value={ password }
              data-testid="password-input"
              type="password"
              placeholder="Digite a senha"
              minLength="6"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button type="button" disabled={ disabled }>Entrar</button>
      </div>
    );
  }
}

export default Login;
