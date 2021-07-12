import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
    };
    this.handlerEmail = this.handlerEmail.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.validateEmailandPassword = this.validateEmailandPassword.bind(this);
  }

  handlerEmail(event) {
    this.setState({ email: event.target.value },
      () => this.validateEmailandPassword());
  }

  handlerPassword(event) {
    this.setState({ password: event.target.value },
      () => this.validateEmailandPassword());
  }

  validateEmailandPassword() {
    const { email, password } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const regexValidation = regex.test(email);
    const validPassword = password.length;
    const minLenght = 6;
    if (validPassword >= minLenght && regexValidation === true) {
      this.setState({ emailIsValid: regexValidation });
    }
  }

  render() {
    const { emailIsValid, email } = this.state;
    const { logar } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            onChange={ this.handlerEmail }
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            onChange={ this.handlerPassword }
            type="password"
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            id="button-validation"
            type="button"
            disabled={ !emailIsValid }
            onClick={ () => logar(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

FormLogin.propTypes = {
  logar: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logar: (usuario) => dispatch(login(usuario)),
});

export default connect(null, mapDispatchToProps)(FormLogin);
