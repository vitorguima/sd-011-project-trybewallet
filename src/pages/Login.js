import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleInputLogin = this.handleInputLogin.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  componentDidUpdate() {
    this.loginValidation();
  }

  loginValidation() {
    const { email, password, disable } = this.state;
    const characters = 6;
    if (email.split('').includes('@')
      && email.split('.').includes('com')
      && password.length >= characters
      && disable) {
      this.setState({ disable: false });
    }
  }

  handleInputLogin({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <section>

        <div>Login</div>

        <div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              placeholder="Username"
              value={ email }
              onChange={ this.handleInputLogin }
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Password"
              value={ password }
              onChange={ this.handleInputLogin }
            />
          </label>
        </div>

        <button type="button" disabled={ disable }>Entrar</button>

      </section>
    );
  }
}

export default Login;
