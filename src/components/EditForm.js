import React from 'react';
import { connect } from 'react-redux';
import './EditForm.css';
import PropTypes from 'prop-types';
import { editExpense } from '../actions';
import Select from './Select';
import { methodOptions, tagOptions } from '../data';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense: { value, description, currency, method, tag } } = props;
    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { value, description, currency, method, tag } = this.state;
    const valueInput = document.querySelector('#value');
    const descriptionInput = document.querySelector('#description');
    const currencySelect = document.querySelector('#currency');
    const methodSelect = document.querySelector('#method');
    const tagSelect = document.querySelector('#tag');
    valueInput.value = value;
    descriptionInput.value = description;
    currencySelect.value = currency;
    methodSelect.value = method;
    tagSelect.value = tag;
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { editExpenseAction, expense: { id, exchangeRates } } = this.props;
    editExpenseAction({ id, value, description, currency, method, tag, exchangeRates });
  }

  render() {
    const { expense: { exchangeRates } } = this.props;
    const coinsOptions = Object.values(exchangeRates);
    return (
      <form className="edit-form">
        <label className="title is-6" htmlFor="value">
          Valor
          <input
            className="input is-small"
            data-testid="value-input"
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label className="title is-6" htmlFor="description">
          Descrição
          <input
            className="input is-small"
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <Select id="currency" options={ coinsOptions } onChange={ this.handleChange } />
        <Select id="method" options={ methodOptions } onChange={ this.handleChange } />
        <Select id="tag" options={ tagOptions } onChange={ this.handleChange } />
        <button
          className="button is-warning"
          type="button"
          onClick={ this.handleClick }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.wallet.editExpenseById,
});

const mapDispatchToProps = (dispatch) => ({
  editExpenseAction: (expense) => dispatch(editExpense(expense)),
});

EditForm.propTypes = {
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
  editExpenseAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
