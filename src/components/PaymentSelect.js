import React from 'react';

export default function PaymentSelect() {
  return (
    <div className="form-group">
      <label htmlFor="paymentMethod">
        Método de pagamento
        <select
          data-testid="method-input"
          id="paymentMethod"
          required
          name="method"
          defaultValue="Selecione a moeda:"
          className="form-select"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    </div>
  );
}
