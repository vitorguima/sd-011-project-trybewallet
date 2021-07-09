import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../Form';
import { fetchMoeda } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { thunk } = this.props;
    thunk();
  }

  render() {
    const { username } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          Olá TrybeWallet
          { username }
        </header>
        <label htmlFor="gastos">
          Total de Gastos:
          <input
            id="gastos"
            data-testid="total-field"
            name="gastos"
            type="number"
            value="0"
          />
        </label>
        <label htmlFor="cambio">
          Cambio:
          <input
            id="cambio"
            data-testid="header-currency-field"
            name="cambio"
            type="text"
            value="BRL"
          />
        </label>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  thunk: () => dispatch(fetchMoeda()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  username: PropTypes.string.isRequired,
  thunk: PropTypes.func.isRequired,
};
