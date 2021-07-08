import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setUserEmail } from '../actions/Login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const DEFAULT_EMAIL = 'alguem@email.com';
    const SIX = 6;
    const { email, password } = this.state;
    const { setUserEmailAction } = this.props;
    return (
      <form>
        <label htmlFor="email" data-testid="email-input">
          <input
            value={ email }
            onChange={ this.handleEmail }
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="senha" data-testid="password-input">
          <input
            value={ password }
            onChange={
              this.handlePassword
            }
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
          />
        </label>
        <Link
          to="/carteira"
        >
          <button
            type="button"
            onClick={ (e) => {
              if (email === DEFAULT_EMAIL && password.length < SIX) {
                e.preventDefault();
              }
              setUserEmailAction(email);
            } }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmailAction: (payload) => dispatch(setUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setUserEmailAction: PropTypes.func,
}.isRequired;
