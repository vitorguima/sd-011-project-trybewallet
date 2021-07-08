import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { login } = this.props;
    const { initialValue } = this.state;

    return (
      <main>
        <header>
          <span data-testid="email-field">{ login }</span>
          <div>
            Despesa total: R$
            <span data-testid="total-field">{ initialValue }</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

Wallet.propTypes = ({
  login: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, null)(Wallet);
