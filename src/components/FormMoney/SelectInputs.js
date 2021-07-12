import React from 'react';

import PropTypes from 'prop-types';

class SelectInputs extends React.Component {
  constructor() {
    super();

    this.state = {
      method: {
        label: 'Método de Pagamento',
        options: {
          Dinheiro: 'Dinheiro',
          'Cartão de crédito': 'Cartão de crédito', // Tinha deixado pronto para Key em Inglês porém o requisito pede assim;
          'Cartão de débito': 'Cartão de débito',
        },
      },
      tag: {
        label: 'Tag',
        options: {
          alimentation: 'Alimentação',
          laze: 'Lazer',
          work: 'Trabalho',
          health: 'Saúde',
          transport: 'Transporte',
        },
      },
    };
  }

  render() {
    const { name, onChange, value } = this.props;
    const { method, tag } = this.state;

    const inputToRender = name === 'method'
      ? Object.values(method)
      : Object.values(tag);

    const labelValue = inputToRender[0];
    const optionsValue = Object.entries(inputToRender[1]);

    return (
      <label htmlFor={ name }>
        { labelValue}
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
        >
          {
            optionsValue.map((option, index) => (
              // Mudar o value para option[0] caso queira as key/value passados em ingles;
              <option key={ index } value={ option[1] }>
                {option[1]}
              </option>))
          }
        </select>
      </label>
    );
  }
}

SelectInputs.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInputs;
