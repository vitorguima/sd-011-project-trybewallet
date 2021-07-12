import React, { Component } from 'react';
import { IoMdTrash } from 'react-icons/io';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { eraseDispense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { deletDispense } = this.props;
    deletDispense(index);
  }

  render() {
    const { infos = [] } = this.props;
    return (
      <table id="table">
        <thead className="thead">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th colSpan="2">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            infos.map((item, index) => (
              <tr key={ index }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{item.value}</td>
                <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>
                  {(item.value * item.exchangeRates[item.currency].ask).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.handleClick(index) }
                    type="button"
                  >
                    <IoMdTrash size="25px" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  infos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletDispense: (index) => dispatch(eraseDispense(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletDispense: PropTypes.func.isRequired,
};
