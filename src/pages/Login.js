import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator'; // All credits to https://github.com/manishsaraan/email-validator
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValidated: false,
      passwordValidated: false,
      formValidated: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatesForm = this.validatesForm.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
  }

  validatesForm() {
    console.log('funfa');
    const { emailValidated, passwordValidated } = this.state;
    console.log(emailValidated);
    console.log(passwordValidated);
    if (emailValidated && passwordValidated) {
      this.setState({ formValidated: false });
    } else {
      this.setState({ formValidated: true });
    }
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    const { add } = this.props;
    const { email, password, formValidated } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="password"
            minLength="6"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <input
            type="submit"
            value="Entrar"
            disabled={ formValidated }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);
