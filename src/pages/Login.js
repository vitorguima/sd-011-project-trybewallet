import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
  }

  // handleClick(event) {
  // return event.preventDefault(event); // retirar esse prevent
  // }

  render() {
    const { submitLogin } = this.props;
    const { email } = this.state;
    return (
      <div>
        <form className="login">
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              name="password"
              type="password"
              minLength="6"
              // value={ redux } onChange={ hendleChange }
              required
            />
            <button
              type="submit"
              onClick={ submitLogin(email) }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (value) => dispatch(login(value)),
});

Login.propTypes = {
  submitLogin: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
