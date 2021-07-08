import React from 'react';
import styles from './Login.module.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
      error: null,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleSubmit(event) {
    event.preventDefaul();
  }

  handleChangeEmail({ target }) {
    const { email, password } = this.state;
    const isValid = target.checkValidity();
    if (isValid) {
      this.setState({ email: target.value });
    }
    if (email && password) {
      this.setState({ disable: false });
    }
  }

  handleChangePassword({ target }) {
    const { email } = this.state;
    const isValid = target.checkValidity();
    if (isValid) {
      this.setState({ password: target.value });
    }
    if (email && isValid) {
      this.setState({ disable: false });
    }
  }

  handleOnBlur({ target }) {
    if (target.value.length === 0) {
      this.setState({ error: 'Preencha um valor' });
    }
    if (target.value.length > 0) {
      this.setState({ error: null });
    }
  }

  render() {
    const { disable, error } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          style={ { display: 'block' } }
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChangeEmail }
          onBlur={ this.handleOnBlur }
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Informe um email válido."
        />
        <input
          type="password"
          style={ { display: 'block' } }
          data-testid="password-input"
          placeholder="Password"
          onChange={ this.handleChangePassword }
          onBlur={ this.handleOnBlur }
          pattern=".{6,}"
          title="A senha deve ter, ao menos, 9 caracteres."
        />
        <p>{error !== null ? error : null}</p>
        <button
          type="button"
          disabled={ disable }
          className={ styles.button }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
