import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.onChangePw = this.onChangePw.bind(this);

    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  onChangePw(e) {
    this.handleInput(e);
    this.validatePassword(e);
  }

  onChangeEmail(e) {
    this.handleInput(e);
    this.validateEmail(e);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const MIN_SECURE_PW = 6;
    if (value.length >= MIN_SECURE_PW) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
    }
  }

  validateEmail({ target }) {
    const { value } = target;
    const email = value;
    const validEmail = (email.includes('@') && email.includes('.com'));
    if (validEmail) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    return (
      <section>
        <h1>ÁREA DE LOGIN</h1>
        <input
          type="text"
          placeholder="login"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ (e) => this.onChangeEmail(e) }
        />
        <input
          type="password"
          placeholder="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ (e) => this.onChangePw(e) }
        />
        <button
          type="submit"
          disabled={ !(isEmailValid && isPasswordValid) }
          onClick={ () => this.validateEmail() }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
