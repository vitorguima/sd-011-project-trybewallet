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

  validateInputs(email) {
    const { password } = this.props;
    const requiredLenght = 6;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (regex.test(email) && password.length >= requiredLenght) {
      return this.setState({ disable: true });
    }
    this.setState({ disable: true });
    alert('Preencha seu email e senha corretamente');
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
            disabled={ !disable }
            onMouseEnter={ () => this.validateInputs(email) }
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
