/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
