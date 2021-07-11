import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { emailLogin } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ emailLogin }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  emailLogin: email,
});

Wallet.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
