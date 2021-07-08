import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.currenciesOptions = this.currenciesOptions.bind(this);
  }

  componentDidMount() {
    const { toFetch } = this.props;
    toFetch();
  }

  currenciesOptions() {
    const { moedas } = this.props;
    const options = moedas.filter((moeda) => moeda !== 'USDT');
    return (
      <select>
        {options.map((moeda) => (<option key={ moeda }>{ moeda }</option>))}
      </select>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor>
          Valor
          <input type="text" />
        </label>
        <label htmlFor>
          Descrição
          <input type="text" />
        </label>
        <label htmlFor>
          Moeda
          {this.currenciesOptions()}
        </label>
        <label htmlFor>
          Método de pagamento
          <select>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor>
          Tag
          <select>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  toFetch: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  moedas: Object.keys(state.wallet.currencies),
});

Form.propTypes = {
  toFetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
