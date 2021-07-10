import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setUserEmail } from '../actions/Login';

class Login extends Component {
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
    const VALID_EMAIL = 'alguem@email.com';
    const VALID_PASSWORD = '123456';
    const { email, password } = this.state;
    const { setUserEmailAction } = this.props;
    return (
      <form>
        <label htmlFor="email">
          <input
            value={ email }
            onChange={ this.handleEmail }
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="senha">
          <input
            value={ password }
            onChange={
              this.handlePassword
            }
            data-testid="password-input"
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
            id="buttonSubmit"
            onClick={ () => {
              setUserEmailAction(email);
            } }
            disabled={ !(email === VALID_EMAIL && password === VALID_PASSWORD) }
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
