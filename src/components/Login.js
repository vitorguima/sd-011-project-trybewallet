import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userEmail } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      mailOk: false,
      passOk: false,
    });

    this.handleChange = this.handleChange.bind(this);
    this.isEmail = this.isEmail.bind(this);
    this.isPassword = this.isPassword.bind(this);
    // this.onLogin = this.onLogin.bind(this);
  }

  // onLogin(email) {
  //   console.log(email);
  //   this.setState({
  //     email,
  //   });
  // }

  handleChange({ target }) {
    const { type } = target;
    const { value } = target;
    // console.log(type);
    this.setState({
      [type]: value,
    });
    if (type === 'email') {
      this.isEmail(value);
    }
    if (type === 'password') {
      this.isPassword();
    }
  }

  isPassword() {
    const { password } = this.state;
    const six = 5;
    if (password.length >= six) {
      return this.setState({ passOk: true });
    }
    return this.setState({
      passOk: false,
    });
  }

  isEmail(value) {
    const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!regEmail.test(value)) {
      return this.setState({ mailOk: false });
    }
    return this.setState({
      mailOk: true,
    });
  }

  render() {
    const { userMail } = this.props;
    const { mailOk, passOk, email } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          placeholder="Login"
          type="email"
          required
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="password"
          required
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !mailOk || !passOk }
            onClick={ () => userMail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  userMail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userMail: (value) => dispatch(userEmail(value)),
});

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

export default connect(null, mapDispatchToProps)(Login);
