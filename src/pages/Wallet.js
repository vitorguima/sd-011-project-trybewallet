import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestAPI } = this.props;
    requestAPI();
  }

  render() {
    return (
      <>
        alo
        <Header />
        <ExpenseForm />
      </>
    );
  }
}

Wallet.propTypes = {
  requestAPI: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  requestAPI: () => dispatch(fetchApi()),
});

export default connect(null, mapDispatchToProps)(Wallet);
