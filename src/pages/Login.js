import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
      disableButton: true,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      disableButton: true,
    }, () => {
      if (this.checkEmail() && this.checkPassword()) {
        this.setState({
          disableButton: false,
        });
      }
    });
  }

  checkPassword() {
    const { userPassword } = this.state;
    const limit = 5;
    return (userPassword.length > limit);
  }

  checkEmail() {
    const { userEmail } = this.state;
    const eCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return eCheck.test(userEmail);
  }

  render() {
    const { userEmail, userPassword, disableButton } = this.state;
    return (
      <div>
        <input
          name="userEmail"
          type="email"
          data-testid="email-input"
          onChange={ (e) => this.handlerChange(e) }
          value={ userEmail }
          placeholder="Digite um e-mail valido"
        />
        <input
          name="userPassword"
          type="text"
          data-testid="password-input"
          onChange={ (e) => this.handlerChange(e) }
          value={ userPassword }
          placeholder="Digite a senha com no mínimo 6 caracteres"
        />
        <button disabled={ disableButton } type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
