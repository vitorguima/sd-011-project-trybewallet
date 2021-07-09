import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Moeda extends Component {
  render() {
    const { handleChange, currencies } = this.props;
    return (
      <label htmlFor="Moeda">
        Moeda:
        <select id="Moeda" name="currency" onChange={ handleChange }>
          {currencies.map((coins) => Object.values(coins)
            .map((siglas) => siglas).filter((item) => item.codein !== 'BRLT')
            .map((element) => <option key={ element.code }>{element.code}</option>))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { currencies, expenses } }) => (
  { email, currencies, expenses }
);

export default connect(mapStateToProps)(Moeda);

Moeda.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(Object).isRequired,
};
