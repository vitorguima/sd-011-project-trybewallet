import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginInputs } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disable: true,
    };
    this.validateInputs = this.validateInputs.bind(this);
  }

  componentDidUpdate() {
    const { email } = this.props;
    this.validateInputs(email);
  }

  validateInputs(email) {
    const { password } = this.props;
    const { disable } = this.state;
    const requiredLenght = 6;
    const regex = /^\w+(\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
    if (regex.test(email) && password.length >= requiredLenght && disable) {
      return this.setState({ disable: false });
    }
  }

  render() {
    const { dispatchHandleInput, email, password } = this.props;
    const { disable } = this.state;
    return (
      <div>
        <h3>Faça login</h3>
        <label htmlFor="email">
          Email de usuário:
          <input
            name="email"
            placeholder="Insira um email válido"
            value={ email }
            type="email"
            data-testid="email-input"
            onChange={ dispatchHandleInput }
          />
        </label>
        <br />
        <label htmlFor="email">
          Senha do usuário:
          <input
            name="password"
            placeholder="Mínimo de 6 caracteres"
            value={ password }
            type="password"
            data-testid="password-input"
            onChange={ dispatchHandleInput }
          />
        </label>
        <br />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchHandleInput: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchHandleInput: (state) => dispatch(loginInputs(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
