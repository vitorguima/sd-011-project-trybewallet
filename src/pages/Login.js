import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePw = this.onChangePw.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  onClickSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { user } = this.props;
    user(email);
  }

  onChangePw(e) {
    this.handleInput(e);
    this.validatePassword(e);
  }

  onChangeEmail(e) {
    this.handleInput(e);
    this.validateEmail(e);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const MIN_SECURE_PW = 6;
    if (value.length >= MIN_SECURE_PW) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
    }
  }

  validateEmail({ target }) {
    const { value } = target;
    const email = value;
    const validEmail = (email.includes('@') && email.includes('.com'));
    if (validEmail) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    return (
      <section>
        <h1>ÁREA DE LOGIN</h1>
        <input
          type="text"
          placeholder="login"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ (e) => this.onChangeEmail(e) }
        />
        <input
          type="password"
          placeholder="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ (e) => this.onChangePw(e) }
        />
        <button
          type="submit"
          disabled={ !(isEmailValid && isPasswordValid) }
          onClick={ (e) => this.onClickSubmit(e) }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(setUser(email)),
});

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  user: PropTypes.func,
}.isRequired;
