import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email, password } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <h1>TrybeWallet</h1>
          <h3>{email}</h3>
        </header>
        <Form />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

export default connect(mapStateToProps)(Wallet);
