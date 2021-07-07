import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';
import Form from './components/Form';

class Wallet extends Component {
  render() {
    const { email, getData, totalfield } = this.props;
    // REQUISIÇÃO A API FEITA ABAIXO
    getData();
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{totalfield}</span>
          <span data-testid="header-currency-field">BRL</span>
          <Form />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalfield: state.wallet.totalfield,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  totalfield: PropTypes.number.isRequired,
};
