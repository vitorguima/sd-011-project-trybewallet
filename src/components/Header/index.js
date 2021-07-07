import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <div>TrybeWallet</div>
        <section>
          <span data-testid="email-field">
            {`Email: ${email}`}
          </span>
          <span data-testid="total-field">Despesa total: R$ 0.00</span>
          <span data-testid="header-currency-field">BRL</span>
        </section>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
