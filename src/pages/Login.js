import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { UserLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.validation = this.validation.bind(this);
  }
  /*
  componentDidUpdate() {
    this.validation();
  } */

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  /*
  validation() {
    const { password, email, disabled } = this.state;
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordLength = 6;
    if (re.test(email) && password.length >= passwordLength && disabled) {
      this.setState({ disabled: false });
    }
  } */

  render() {
    const { email, password } = this.state;
    const { myLogin } = this.props;
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordLength = 6;
    const enabled = re.test(email)
    && password.length >= passwordLength;
    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          placeholder="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          placeholder="senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !enabled }
            onClick={ () => {
              myLogin(email);
            } }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myLogin: (state) => dispatch(UserLogin(state)) });

Login.propTypes = {
  myLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
