import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInWallet } from '../actions';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      password: false,
      validEmail: '',
    };
    this.validate = this.validate.bind(this);
  }

  validate(field, regex) {
    const { attributes: { name } } = field;
    if (regex[name.value].test(field.value)) this.setState({ [name.value]: true });
    if (name.value === 'email') this.setState({ validEmail: field.value });
  }

  render() {
    const patterns = {
      email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
      password: /^[\w@-]{6,20}$/,
    };

    const { submitLogIn } = this.props;
    const { email, validEmail, password } = this.state;
    const disable = (email && password);
    // console.log(disable)

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
              onChange={ ({ target }) => this.validate(target, patterns) }
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
              onChange={ ({ target }) => this.validate(target, patterns) }
              required
            />
            <button
              type="button"
              onClick={ () => submitLogIn(validEmail) }
              disabled={ !disable }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitLogIn: (value) => dispatch(logInWallet(value)),
});

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

login.propTypes = {
  submitLogIn: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(login);
