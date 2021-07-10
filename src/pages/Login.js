import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.loginCheck = this.loginCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkEmail() {
    const emailValid = /^[a-zA-Z]+@[a-zA-Z]+\.[com]{3,}$/i;
    const length = 6;
    const { email, password } = this.state;

    return email.match(emailValid) && password.length >= length;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => this.setState({
      disabled: !this.checkEmail(),
    }));
  }

  loginCheck() {
    const { addingEmail, history } = this.props;
    const { email } = this.state;

    addingEmail(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.loginCheck }
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addingEmail: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  addingEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }),
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
