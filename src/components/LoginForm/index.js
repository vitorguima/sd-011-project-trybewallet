import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveEmail } from '../../actions';

// Email Regex Source: http://jsfiddle.net/ghvj4gy9/
// eslint-disable-next-line max-len
const username = '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))';
const domainName = '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}';
const domain = '\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
const EMAIL_REGEX = new RegExp([username, domainName, domain].join(''));
const passwordLength = 6;

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isFormValid: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value,
    }, () => this.setState({
      isFormValid: this.validateForm(),
    }));
  }

  validateForm() {
    const { email, password } = this.state;

    return EMAIL_REGEX.test(email) && password.length >= passwordLength;
  }

  handleSubmit() {
    const { storeEmail } = this.props;
    const { email } = this.state;
    storeEmail(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, isFormValid, redirect } = this.state;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ ({ target }) => this.handleChange(target) }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ ({ target }) => this.handleChange(target) }
          minLength="6"
          required
        />
        <button type="button" onClick={ this.handleSubmit } disabled={ !isFormValid }>
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  storeEmail: PropTypes.func,
}.isRequired;
