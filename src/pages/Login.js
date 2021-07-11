import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';
import '../App.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      changeRoute: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    // https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const minLength = 5;
    const validatePassword = password.length >= minLength;

    if (this.validateEmail(email) && validatePassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { verificaEmail } = this.props;
    verificaEmail(this.state);
    this.setState({
      email: '',
      disabled: false,
      password: '',
      changeRoute: true,
    });
  }

  render() {
    const { disabled, email, password, changeRoute } = this.state;
    return (
      <div className="login-div">
        <input
          className="email-input"
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          placeholder="email"
          onChange={ this.handleChange }
        />
        <input
          className="password-input"
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          placeholder="senha"
          onChange={ this.handleChange }
        />
        <button
          className="login-button"
          onClick={ this.handleClick }
          disabled={ disabled }
          type="submit"
        >
          Entrar
        </button>
        {/* https://reactrouter.com/web/api/Redirect */}
        {changeRoute && <Redirect to="/carteira" />}
      </div>
    );
  }
}

Login.propTypes = {
  verificaEmail: Proptypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  verificaEmail: (payload) => dispatch(actions.userAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
