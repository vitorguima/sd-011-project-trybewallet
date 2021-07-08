import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginEmail } from '../actions';

class LoginInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonCondition = this.buttonCondition.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  buttonValidation() {
    const { email, password } = this.state;
    const EMAIL_PATTERN = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const maxLength = 6;
    const passwordValidation = password.length >= maxLength;
    const emailValidation = email.match(EMAIL_PATTERN);
    return !(passwordValidation && emailValidation);
  }

  buttonCondition(e) {
    e.preventDefault();
    const { email } = this.state;
    const { emailInput } = this.props;
    this.setState({ redirect: true });
    emailInput(email);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form onSubmit={ this.buttonCondition }>
        <input
          name="email"
          placeholder="your e-mail here..."
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          placeholder="your password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          maxLength="6"
        />
        <button
          type="submit"
          disabled={ this.buttonValidation() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailInput: (payload) => dispatch(loginEmail(payload)),
});

LoginInput.propTypes = {
  emailInput: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginInput);
