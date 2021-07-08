import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData, loginAction } from '../actions';

class FormTwo extends React.Component {

  componentDidMount() {
    const { setFetch } = this.props;
    setFetch();
  }

  render() {
    const { handleState, currencies } = this.props;
    const arrMoedas = Object.keys(currencies).filter((moeda) => moeda !== 'USDT');

    return (
      <fieldset>
        <label htmlFor="moeda-input">
          Moeda
          <select
            id="moeda-input"
            name="moeda"
            onChange={ (estado) => handleState(estado) }
          >
            { arrMoedas.map((moeda, index) => <option key={ index }>{ moeda }</option>)}
          </select>
        </label>
        <label htmlFor="pagamento-input">
          Método de pagamento
          <select
            id="pagamento-input"
            name="pagamento"
            onChange={ (estado) => handleState(estado) }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (email) => dispatch(loginAction(email)),
  setFetch: () => dispatch(fetchData()),
});

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);

FormTwo.propTypes = {
  handleState: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
