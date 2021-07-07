import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleLoginBtn() {
    const { email, password } = this.state;
    if (email === 'alguem@email.com' && password === '123456') {
      return false;
    }
    return true;
  }

  handleInputText({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>Alguma imagem legal</div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          required
          onChange={ (e) => this.handleInputText(e) }
        />
        <input
          data-testid="password-input"
          type="password"
          minLength="6"
          name="password"
          required
          onChange={ (e) => this.handleInputText(e) }
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
