import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //     disabled: true,
  //   };
  // }


  handleInput(target) {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.setState({ disabled: !this.validate() }));
  }


  render() {

    return (
      <form className="expenses-form">
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            type="number"
            placeholder="0"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            name="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency">
            <option>Moeda corrente</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select name="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select name="tag">
            <option value="cash">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>



      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   submitLogIn: (value) => dispatch(logInWallet(value)),
// });

// login.propTypes = {
//   submitLogIn: PropTypes.func.isRequired,
//   history: PropTypes.func.isRequired,
// };

export default connect(null, mapDispatchToProps)(ExpensesForm);
