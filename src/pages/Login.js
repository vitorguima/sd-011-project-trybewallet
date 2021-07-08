import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Função que torna o input dinâmico ao state.
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.LoginVerification());
  }

  /* Função que verifica se a senha possui ao menos 6 caracteres, e
     a estrutura de um email. */
  LoginVerification() {
    const { email, password } = this.state;
    const minimumLength = 6;
    if (email.includes('@' && '.com') && password.length >= minimumLength) {
      this.setState({
        disabledButton: false,
      });
    }
  }

  emailSubmit() {
    // Lógica para enviar o email.
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>
        <label
          htmlFor="input-email"
        >
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label
          htmlFor="input-password"
        >
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          disabled={ disabledButton }
          onClick={ () => this.emailSubmit() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   username: state.userReducer.username,
// });

// export default connect(null, mapStateToProps)(Login);

export default Login;
