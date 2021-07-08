import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  emailValidation() {
    const { email, password } = this.state;
    const carValid = /\S+@\S+\.\S+/;
    const limitNumber = 6;
    if (carValid.test(email) && password.length >= limitNumber) {
      return false;
    }
    return true;
  }

  render() {
    const { stateEmail } = this.props;
    const { email, password } = this.state;
    return (
      <main>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          placeholder="Digite aqui o seu e-mail"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Senha"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.emailValidation() }
            onClick={ () => stateEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  stateEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = ({
  stateEmail: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Login);
