import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mountExpenses } from '../actions';

class FormDespesa extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      metod: '',
      tag: '',
      id: 0,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderForm1() {
    const { valor, descricao, moeda } = this.state;
    const { currencies } = this.props;
    const moedas = Object.keys(currencies).filter((code) => code !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="descricao">
          Descrição
          <br />
          <textarea
            name="descricao"
            id="descricao"
            value={ descricao }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda" onChange={ this.handleInput } value={ moeda }>
            {moedas.map((res, i) => <option key={ i } value={ res }>{res}</option>)}
          </select>
        </label>
      </form>
    );
  }

  renderForm2() {
    const { metod, tag } = this.state;
    return (
      <form>
        <br />
        <label htmlFor="metod">
          Método de pagamento
          <select name="metod" id="metod" value={ metod } onChange={ this.handleInput }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleInput }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { MountExpenses } = this.props;
    return (
      <div>
        {this.renderForm1()}
        {this.renderForm2()}
        <br />
        <button
          type="button"
          onClick={ () => {
            MountExpenses(this.state);
            this.setState((prevState) => ({
              valor: '',
              descricao: '',
              moeda: '',
              metod: '',
              tag: '',
              id: prevState.id + 1,
            }));
          } }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  MountExpenses: (state) => dispatch(mountExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesa);

FormDespesa.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
};
