import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     disabled: true,
  //   };

  //   // this.handleChange = this.handleChange.bind(this);
  // }
  // handleChange({ target }) {
  //   const { value } = target;
  //   this.setState({ email: value, disabled: false });
  // }

  // handleClick(event) {
  //   return event.preventDefault(event); // retirar esse prevent
  // }

  render() {
    const { submitLogin, email, disabled } = this.props;

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
              onChange={ ({ target }) => submitLogin(target) }
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
              onChange={ ({ target }) => submitLogin(target) }
              required
            />
            <button
              type="submit"
              onClick={ () => submitLogin(email) }
              disabled={ disabled }
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

const mapStateToProps = (state) => ({
  email: state.user.email,
  disabled: state.user.disabled,
});

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
