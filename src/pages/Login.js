import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: true,
    };
  }

  render() {
    const activeButton = () => {
      const { email, password } = this.state;
      const regex = /\w+@\w+.com(.br)?/;
      const numMin = 6;
      if (regex.test(email) && password.length >= numMin) {
        this.setState({ button: false });
      } else {
        this.setState({ button: true });
      }
    };

    const handleInput = ({ target }) => {
      const { value, name } = target;
      this.setState({ [name]: value }, () => activeButton());
    };
    const { email, button } = this.state;
    const { emailLogin } = this.props;
    return (
      <div>
        <div>
          <input
            name="email"
            data-testid="email-input"
            type="text"
            onChange={ handleInput }
            placeholder="email"
          />
          <input
            name="password"
            data-testid="password-input"
            type="password"
            onChange={ handleInput }
            placeholder="senha"
          />
        </div>
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ button }
            onClick={ () => emailLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailLogin: (email) => dispatch(login(email)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  emailLogin: PropTypes.func.isRequired,
};
