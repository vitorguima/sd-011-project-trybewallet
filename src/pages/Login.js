import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';
import trybeWallet from '../image/trybeWallet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value },
      () => this.validateData());
  }

  validateData() {
    const { email, password } = this.state;
    const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);
    const minLengthPassword = 6;

    this.setState({
      isDisabled: !(password.length >= minLengthPassword && validateEmail) });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { userLogin } = this.props;
    return (
      <div className="main-div">
        <img src={ trybeWallet } alt="trybeWalletImage" />
        <div className="user-login">
          <input
            type="text"
            data-testid="email-input"
            placeholder="e-mail"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            data-testid="password-input"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
        </div>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ () => userLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(login(email)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
