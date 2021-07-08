import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  render() {
    const { emailUser } = this.props;
    const { value } = this.state;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${emailUser}`}</span>
          <span data-testid="total-field">{`Despesa Total: ${value}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  emailUser: PropTypes.string,
}.isRequired;
