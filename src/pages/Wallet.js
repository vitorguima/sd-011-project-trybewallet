import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LabelForm from '../components/LabelForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { valor } = this.state;
    return (
      <>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">
            {' '}
            { valor }
            {' '}
          </div>
          <div data-testid="header-currency-field"> BRL </div>

        </header>
        <LabelForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
