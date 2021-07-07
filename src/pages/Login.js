import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };
    this.checkEmail = this.checkEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkEmail() {
    const passwordMinLength = 6;
    const { email, password } = this.state;
    this.setState({
      isValid: /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
        && password.length >= passwordMinLength,
    });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      this.checkEmail();
    });
  }

  handleSubmit(event) {
    const { history, setEmail } = this.props;
    const { email } = this.state;
    event.preventDefault();
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isValid } = this.state;

    return (
      <div>
        Login
        <input
          name="email"
          type="email"
          id="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          name="password"
          type="password"
          id="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
        />
        <Link to="/carteira">
          <button
            disabled={ !isValid }
            type="submit"
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (user) => dispatch(setUserEmail(user)),
});

export default connect(null, mapDispatchToProps)(Login);
