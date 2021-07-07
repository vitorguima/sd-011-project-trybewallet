import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const checkEmail = email.match(reg);
      const checkPassword = password.length >= '6';
      this.setState({
        disabled: !(checkEmail && checkPassword),
      });
    });
  }

  clickSubmit() {
    const { email } = this.state;
    const { setUserEmailAction } = this.props;
    setUserEmailAction(email);
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleInputChange }
          data-testid="email-input"
          placeholder="Login"
        />

        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleInputChange }
          data-testid="password-input"
          placeholder="Senha"
          required
        />

        <button
          type="submit"
          onClick={ this.clickSubmit }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  setUserEmailAction: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispath) => ({
  setUserEmailAction: (payload) => dispath(setUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
