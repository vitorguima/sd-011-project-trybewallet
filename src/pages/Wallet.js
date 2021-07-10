import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email, password } = this.props;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <h3>{email}</h3>
        <h3>{password}</h3>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

export default connect(mapStateToProps)(Wallet);
