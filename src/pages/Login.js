import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  componentDidUpdate() {
    this.verifyInputs();
  }

  verifyInputs() {
    const { email, password, disabled } = this.state;
    const minCaractersPassword = 6;
    const verifyEmail = email.split('').includes('@') && email.split('.').includes('com');
    const verifyPassword = password.length >= minCaractersPassword;
    if (verifyEmail && verifyPassword && disabled) {
      this.setState({
        disabled: false,
      });
    } else if ((!verifyEmail || !verifyPassword) && !disabled) {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { dispatchEmail } = this.props;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          onChange={ this.handleChange }
          name="email"
          value={ email }
          placeholder="Digite seu email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          type="password"
          name="password"
          value={ password }
          placeholder="Digite sua senha"
        />
        <Link to="/carteira">
          <button
            onClick={ () => dispatchEmail(email) }
            disabled={ disabled }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  sendEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(sendEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
