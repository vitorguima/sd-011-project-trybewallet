import React from 'react';
// import { connect } from 'react-redux';
// import { login } from './actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          placeholder="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          placeholder="senha"
          onChange={ this.handleChange }
        />
        <button type="submit" onChange={ this.handleChange }>Entrar</button>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Login;
