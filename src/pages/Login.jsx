import React from 'react';
import { Layout } from '../components';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <Layout>
        <main>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleInputChange }
              value={ email }
            />
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleInputChange }
              value={ password }
            />

            <button type="submit">Entrar</button>
          </form>
        </main>
      </Layout>
    );
  }
}

export default Login;
