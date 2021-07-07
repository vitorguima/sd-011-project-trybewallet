import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            <input
              onChange={ this.handleChanges }
              placeholder="Insira o seu email"
              type="text"
              data-testid="email-input"
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            <input
              onChange={ this.handleChanges }
              placeholder="Insira a sua senha"
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
            />
          </label>
          <Link to="/carteira">
            <button type="button">Entrar</button>
          </Link>
        </form>

      </div>
    );
  }
}

export default Login;
// requisito 1
