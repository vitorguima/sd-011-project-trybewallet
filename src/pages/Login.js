import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disableSubmit: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  enableButton() {
    const { email, password } = this.state;
    const validateEmail = (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const isEmailValid = validateEmail.test(email);
    const passwordMinSize = 5;
    const isPasswordValid = password.length >= passwordMinSize;
    const disableSubmit = (!isEmailValid || !isPasswordValid);
    this.setState({ disableSubmit });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
    this.enableButton();
  }

  handleClick() {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    emailDispatch(email);
  }

  render() {
    const { disableSubmit } = this.state;
    return (
      <div className="login-page">
        <div className="login-area">
          <input
            placeholder="e-mail"
            name="email"
            type="email"
            data-testid="email-input"
            required
            onChange={ this.handleChange }
          />
          <input
            placeholder="senha"
            name="password"
            type="password"
            data-testid="password-input"
            required
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ disableSubmit }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
