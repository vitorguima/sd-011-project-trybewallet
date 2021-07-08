import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
      pay: 0,
    };
  }

  render() {
    const { pay } = this.state;
    const { login } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">{ login }</h4>
        <h4 data-testid="header-currency-field">
          Despesa Total R$
          <span data-testid="total-field">{ pay }</span>
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

Headers.propTypes = ({
  login: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, null)(Headers);
