import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
      shouldRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // crédito regex https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const validEmail = regexEmail.test(email);
      const minLengthPassword = 6;
      const validPassword = password.length >= minLengthPassword;
      if (validEmail && validPassword) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    });
  }

  signIn(email, password) {
    const { login } = this.props;
    login(email, password);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { email, password, isDisabled, shouldRedirect } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          placeholder="e-mail"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          placeholder="password"
          name="password"
          onChange={ this.handleChange }
        />
        <button
          disabled={ isDisabled }
          type="button"
          onClick={ () => this.signIn(email, password) }
        >
          Entrar
        </button>
        {shouldRedirect && <Redirect to="/carteira" />}
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
