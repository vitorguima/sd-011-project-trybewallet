import React from 'react';

export default function ExpenseForm(props) {
  const getOptions = () => {
    if (props.currencies) {
      return props.currencies.map((el) => <option value={`${el}`}>{el}</option>);
    }
  };

  return (
    <form className="d-flex justify-content-between border ">
      <div className="form-group ">
        <label for="valueInput">
          Valor
          <input
            type="number"
            className="form-control"
            id="valueInput"
            placeholder="Adicione o valor"
          />
        </label>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">
          Moeda
          <select className="form-select">{getOptions()}</select>
        </label>
      </div>
      <div className="form-group">
        <label for="paymentMethod">
          Método de pagamento
          <select defaultValue="Selecione a moeda:" className="form-select">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label for="paymentMethod">
          Tag
          <select className="form-select">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
