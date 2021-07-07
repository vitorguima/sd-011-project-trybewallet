import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userActions from '../actions/userActions';
import logo from '../logo.svg';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChange({ target }) {
    const { value, type } = target;
    this.setState({
      [type]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { userEmail } = this.props;
    const passwordLength = 8;

    const validationEmail = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      const validation = regexEmail.test(email);
      return validation;
    };

    const validationPassword = password.length >= passwordLength;

    return (
      <div className="App-header App">
        <img src={ logo } className="App-logo" alt="logo" />
        <section className="App-input">
          <input
            type="email"
            data-testing="email-input"
            onChange={ this.handleOnChange }
          />
          <input
            type="password"
            data-testing="password-input"
            onChange={ this.handleOnChange }
          />
          <Link
            onClick={ () => (userEmail(email)) }
            to="/carteira"
          >
            <button
              type="button"
              className="App-button"
              disabled={ !(validationEmail() && validationPassword) }
            >
              Entrar
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(
    userActions(email),
  ),
});

export default connect(null, mapDispatchToProps)(Login);
