import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Form from '../components/Form';
import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <>
        <header>
          <p data-testid="email-field">{ `E-mail: ${email}` }</p>
          <p data-testid="total-field">{ `Despesa Total: ${total}` }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <Form />
        </div>
      </>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
