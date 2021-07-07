import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Login:
            { ' ' }
            <input
              type="email"
              value={ email }
              data-testid="email-input"
              placeholder="alguem@email.com"
            />

          </label>
          <label htmlFor="password-input">
            Senha:
            { ' ' }
            <input
              type="password"
              value={ password }
              data-testid="password-input"
              placeholder="Digite sua senha"
            />
          </label>
        </form>
        <div>
          <button
            type="button"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
