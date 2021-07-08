import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPIAction, setExpenseAction, activeEditModeAction,
  desactiveEditModeAction, delExpenseAction, saveEditAction } from '../actions';
import Header from '../components/Header';
import HeaderList from '../components/HeaderList';
import InValue from '../components/formsComp/InValue';
import InDescript from '../components/formsComp/InDescript';
import SeCurrency from '../components/formsComp/SeCurrency';
import SeMethod from '../components/formsComp/SeMethod';
import SeTag from '../components/formsComp/SeTag';
import BtDelet from '../components/BtDelet';
import BtAdd from '../components/BtAdd';
import BtEdit from '../components/BtEdit';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      id: '',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addOnClick = this.addOnClick.bind(this);
    this.editOnClick = this.editOnClick.bind(this);
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
    const { value, description, currency, method, tag } = this.state;
    add({ id, value, description, currency, method, tag });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      id: '',
      exchangeRates: '',
    });
  }

  // Função criada para retornar a primeira moeda
  stCur(expense) {
    return (expense.exchangeRates[expense.currency].name).split('/')[0];
  }

  // Função criada para retornar a segunda moeda
  // ndCur(expense) {
  //   const retorno = ((expense.exchangeRates[expense.currency].name)
  //     .split('/')[1]).split(' ')[0];
  //   console.log(retorno);
  //   // QUE LINTER FEIO... BASTA APENAS COLOCAR REAL DIRETO EM UMA DAS COLUNAS
  //   return retorno;
  // }

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

  // Função criada para setar os valores a serem editados no state do componente e ativar o modo de edição
  editMode({ currency, description, exchangeRates, id, method, tag, value }) {
    const { activeEditMode } = this.props;
    activeEditMode();
    this.setState({
      currency, description, method, tag, value, id, exchangeRates,
    });
  }

  // Função criada para salvar na store as edições feitas no gasto e desativar o modo de edição
  editOnClick() {
    const { del, save, desactiveEditMode } = this.props;
    const { value, description, currency, method, tag, id, exchangeRates } = this.state;
    del(id);
    save({ value, description, currency, method, tag, id, exchangeRates });
    desactiveEditMode();
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      id: '',
      exchangeRates: '',
    });
  }

  render() {
    const { email, total, editMode } = this.props;
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
          {!editMode
            ? <BtAdd addOnClick={ this.addOnClick } />
            : <BtEdit editOnClick={ this.editOnClick } /> }
        </form>
        <table className="table">
          <HeaderList />
          <tbody>
            {[...total.sort((a, b) => a.id - b.id)].map((expense, index) => (
              <tr key={ index } className="line">
                <td className="column">{expense.description}</td>
                <td className="column">{expense.tag}</td>
                <td className="column">{expense.method}</td>
                <td className="column">{expense.value}</td>
                <td className="column">{this.stCur(expense)}</td>
                <td className="column">{this.exchangeTwoCases(expense)}</td>
                <td className="column">{this.totalExchange(expense)}</td>
                <td className="column">Real</td>
                <td className="column">
                  <BtDelet id={ expense.id } />
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => this.editMode(expense) }
                  >
                    Edt
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
  editMode: state.wallet.editMode,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPI: () => dispatch(fetchAPIAction()),
  add: (expense) => dispatch(setExpenseAction(expense)),
  activeEditMode: () => dispatch(activeEditModeAction()),
  desactiveEditMode: () => dispatch(desactiveEditModeAction()),
  del: (id) => dispatch(delExpenseAction(id)),
  save: (expense) => dispatch(saveEditAction(expense)),
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
