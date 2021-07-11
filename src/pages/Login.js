import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInWallet } from '../actions';

const patterns = {
  email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{6,20}$/,
};

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  validate() {
    const { email, password } = this.state;
    return patterns.email.test(email) && patterns.password.test(password);
  }

  handleInput(target) {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.setState({ disabled: !this.validate() }));
  }

  handleButton() {
    const { submitLogIn, history } = this.props;
    const { email } = this.state;
    submitLogIn(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <form className="login">
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              name="email"
              type="email"
              placeholder="Digite seu email"
              onChange={ ({ target }) => this.handleInput(target) }
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              minLength="6"
              onChange={ ({ target }) => this.handleInput(target) }
              required
            />
          </label>
          <button
            type="button"
            onClick={ () => this.handleButton() }
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
  submitLogIn: (value) => dispatch(logInWallet(value)),
});

login.propTypes = {
  submitLogIn: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(login);
