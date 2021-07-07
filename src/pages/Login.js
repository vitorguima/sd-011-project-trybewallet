import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const passwordLength = 6;
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const passwordValid = password.length >= passwordLength;
      this.setState({
        disabled: !(emailValid && passwordValid),
      });
    });
  }

  handleClick() {
    const { email } = this.state;
    const { setLogin } = this.props;
    setLogin(email);
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleInput }
          data-testid="email-input"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleInput }
          data-testid="password-input"
          placeholder="password"
        />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (login) => dispatch(actionLogin(login)),
});

Login.propTypes = {
  setLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
