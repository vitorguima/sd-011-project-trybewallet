import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SendEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  componentDidUpdate() {
    this.validateInputs();
  }

  validateInputs() {
    const { email, password, disabled } = this.state;
    const lengthNumberPassword = 6;
    const validateEmail = email.split('').includes('@')
      && email.split('.').includes('com');
    const verifyLengthPassword = password.length >= lengthNumberPassword;
    if (validateEmail && verifyLengthPassword && disabled) {
      this.setState({
        disabled: false,
      });
    } else if ((!validateEmail || !verifyLengthPassword) && !disabled) {
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
    const { dispatchSendEmail } = this.props;
    return (
      <div>
        <div>Login</div>
        <div>
          <label htmlFor="email">
            <input
              name="email"
              value={ email }
              data-testid="email-input"
              type="email"
              placeholder="Digite o e-mail"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              name="password"
              value={ password }
              data-testid="password-input"
              type="password"
              placeholder="Digite a senha"
              minLength="6"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => dispatchSendEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSendEmail: (emailInput) => dispatch(SendEmail(emailInput)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmail: PropTypes.func,
}.isRequired;
