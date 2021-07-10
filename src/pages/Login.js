import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoginValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail() {
    const { email, password } = this.state;
    const reqLenght = 6;
    const re = /\S+@\S+\.\S+/;
    if ((re.test(email)) === true && (password.length >= reqLenght)) {
      this.setState({
        isLoginValid: true,
      });
    } else {
      this.setState({
        isLoginValid: false,
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { isLoginValid } = this.state;
    return (
      <div>
        <h2>Página de Login</h2>
        <form>
          <label htmlFor="email-input">
            E-mail:
            <input
              type="email"
              name="email"
              required
              data-testid="email-input"
              onChange={ this.handleChange }
              onKeyUp={ this.validateEmail }
            />
            <br />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              name="password"
              required
              data-testid="password-input"
              onChange={ this.handleChange }
              onKeyUp={ this.validateEmail }
            />
            <br />
          </label>
          <button
            type="button"
            disabled={ !isLoginValid }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
