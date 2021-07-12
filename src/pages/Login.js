import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUsername } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.userValidation = this.userValidation.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => this.userValidation());
  }

  userValidation() {
    const { email, password } = this.state;
    // https://www.youtube.com/watch?v=QxjAOSUQjP0&ab_channel=TheNetNinja
    const parseEmail = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    const passwordLengthValidate = 6;
    const isValidEmail = parseEmail.test(email);
    const isValidPassword = password.length >= passwordLengthValidate;
    if (isValidEmail && isValidPassword) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { singIn } = this.props;
    return (
      <div>
        <form>
          <input
            id="email"
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            id="password"
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              disabled={ disabled }
              type="button"
              onClick={ () => singIn({ email, password }) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  singIn: (payload) => dispatch(setUsername(payload)),
});

Login.propTypes = {
  singIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
