import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchAPI, getExpenses, fetchNewCurr } from '../actions';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonExpenses() {
    const { dispatchExpenses, fetchNew } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          fetchNew();
          dispatchExpenses(this.state);
          this.setState((prev) => ({ id: prev.id + 1 }));
        } }
      >
        Adicionar despesa
      </button>
    );
  }

  labelValueDescription() {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
      </>
    );
  }

  labelmethodTag() {
    const { method, tag } = this.state;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option onChange={ this.handleChange }>Dinheiro</option>
            <option onChange={ this.handleChange }>Cartão de crédito</option>
            <option onChange={ this.handleChange }>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange } value={ tag }>
            <option onChange={ this.handleChange }>Alimentação</option>
            <option onChange={ this.handleChange }>Lazer</option>
            <option onChange={ this.handleChange }>Trabalho</option>
            <option onChange={ this.handleChange }>Transporte</option>
            <option onChange={ this.handleChange }>Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const {
      stateCurrencies, stateIsLoading } = this.props;
    const { currency } = this.state;
    if (stateIsLoading) {
      return (
        <>
          <Header />
          <p>Loading...</p>
        </>
      );
    }
    return (
      <>
        <Header />
        <form>
          {this.labelValueDescription()}
          <label htmlFor="currency">
            Moeda
            <select
              name="currency"
              id="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              {Object.keys(stateCurrencies)
                .filter((e) => e !== 'USDT')
                .map((e) => stateCurrencies[e])
                .map((e, i) => (
                  <option key={ i } onChange={ this.handleChange }>
                    {e.code}
                  </option>
                ))}
            </select>
          </label>
          {this.labelmethodTag()}
        </form>
        {this.buttonExpenses()}
        <TableExpenses />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  stateCurrencies: state.wallet.currencies,
  stateIsLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchAPI()),
  dispatchExpenses: (state) => {
    dispatch(getExpenses(state));
  },
  fetchNew: () => dispatch(fetchNewCurr()),
});

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  fetchNew: PropTypes.func.isRequired,
  stateCurrencies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  stateIsLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
