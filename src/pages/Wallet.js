import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPIAction, setExpenseAction, delExpenseAction } from '../actions';
import Header from '../components/Header';
import InValue from '../components/formsComp/InValue';
import InDescript from '../components/formsComp/InDescript';
import SeCurrency from '../components/formsComp/SeCurrency';
import SeMethod from '../components/formsComp/SeMethod';
import SeTag from '../components/formsComp/SeTag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { requestAPI } = this.props;
    requestAPI();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  addOnClick() {
    const { add, id } = this.props;
    add({ id, ...this.state });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  // Função criada para retornar a primeira moeda
  stCur(expense) {
    return (expense.exchangeRates[expense.currency].name).split('/')[0];
  }

  // Função criada para retornar a segunda moeda
  ndCur(expense) {
    return (expense.exchangeRates[expense.currency].name).split('/')[1];
  }

  // Função criada para retornar o valor com duas casas decimais
  valueTwoCases(expense) {
    return `${expense.currency} ${(Number(expense.value)).toFixed(2)}`;
  }

  // Função criada para retornar o câmbio com duas casas decimais
  exchangeTwoCases(expense) {
    return (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2);
  }

  // Função criada para retornar o valor convertido com duas casas decimais
  totalExchange(expense) {
    return (Number(expense.value
      * expense.exchangeRates[expense.currency].ask)).toFixed(2);
  }

  render() {
    const { email, total, del } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <Header email={ email } total={ total } />
        <form>
          <InValue handle={ this.handleChange } value={ value } />
          <InDescript handle={ this.handleChange } value={ description } />
          <SeCurrency handle={ this.handleChange } value={ currency } />
          <SeMethod handle={ this.handleChange } value={ method } />
          <SeTag handle={ this.handleChange } value={ tag } />
          <button
            type="button"
            onClick={ () => this.addOnClick() }
          >
            Adicionar despesa
          </button>
        </form>
        <div className="table">
          <div className="line">
            <div className="column"> Descrição</div>
            <div className="column"> Tag</div>
            <div className="column"> Método de Pagamento</div>
            <div className="column">Valor</div>
            <div className="column"> Moeda</div>
            <div className="column"> Câmbio utilizado</div>
            <div className="column"> Valor convertido</div>
            <div className="column"> Moeda de conversão</div>
            <div className="column"> Editar/Excluir</div>
          </div>
          {total.map((expense, index) => (
            <div key={ index } className="line">
              {console.log(expense)}
              <div className="column">{expense.description}</div>
              <div className="column">{expense.tag}</div>
              <div className="column">{expense.method}</div>
              <div className="column">{this.valueTwoCases(expense)}</div>
              <div className="column">{this.stCur(expense)}</div>
              <div className="column">{this.exchangeTwoCases(expense)}</div>
              <div className="column">{this.totalExchange(expense)}</div>
              <div className="column">{this.ndCur(expense)}</div>
              <div className="column">
                <button type="button" onClick={ () => del(expense.id) }>Excluir</button>
              </div>
            </div>))}
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
  isLoading: state.wallet.isLoading,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPI: () => dispatch(fetchAPIAction()),
  add: (expense) => dispatch(setExpenseAction(expense)),
  del: (id) => dispatch(delExpenseAction(id)),
});

Wallet.propTypes = {
  total: PropTypes.arrayOf(PropTypes.number),
  email: PropTypes.string,
  requestAPI: PropTypes.func,
  add: PropTypes.func,
  id: PropTypes.number,
  del: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
