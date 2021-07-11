import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput(props) {
  const { user, handleDelete } = props;
  const { description, method, tag, value, exchangeRates, currency, id } = user;
  const { name, ask } = exchangeRates[currency];
  const convertedPrice = ask * value;

  return (
    <tr>
      <th>{description}</th>
      <td role="cell">{tag}</td>
      <td role="cell">{method}</td>
      <td role="cell">{value}</td>
      <td role="cell">{name}</td>
      <td role="cell">{parseFloat(ask).toFixed(2)}</td>
      <td role="cell">{convertedPrice}</td>
      <td role="cell">Real</td>
      <td>
        <button
          type="button"
          data-testid="edit-btn"
          className="btn fas fa-edit btn-info m-1"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={ () => handleDelete(id) }
          data-testid="delete-btn"
          className="btn fas fa-trash-alt btn-danger m-1"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

FormInput.propTypes = {
  user: PropTypes.shape({
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.number,
    exchangeRates: PropTypes.number,
    currency: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,

};
