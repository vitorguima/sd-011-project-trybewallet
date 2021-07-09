import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Descrição from './components_Forms/Descrição';
import Moeda from './components_Forms/Moeda';
import Tag from './components_Forms/Tag';
import Valor from './components_Forms/Valor';
import MetodoDePagamento from './components_Forms/MetodoDePagamento';
import { fetchCurrencyQuotes, expenseCreate } from '../actions';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { expenses, currencies, getfetch } = this.props;
    return (
      <div>
        <form>
          <Valor handleChange={ this.handleChange } />
          <Moeda handleChange={ this.handleChange } />
          <MetodoDePagamento handleChange={ this.handleChange } />
          <Tag handleChange={ this.handleChange } />
          <Descrição handleChange={ this.handleChange } />
          <button
            type="button"
            onClick={ () => {
              getfetch();
              expenses({ ...this.state, exchangeRates: currencies[0] });
              this.setState((prevState) => ({ id: prevState.id + 1 }));
            } }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getfetch: () => dispatch(fetchCurrencyQuotes()),
  expenses: (state) => dispatch(expenseCreate(state)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  expenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getfetch: PropTypes.func.isRequired,
};
