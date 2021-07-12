/* eslint-disable max-statements */
import React from 'react';
import { useDispatch } from 'react-redux';
import { sendExpense, fixExpense } from '../services/API';
import FormInput from './FormInput';

export default function ExpenseForm() {
  const dispatch = useDispatch();
  const submitButton = document.getElementById('submitButton');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = new FormData(target);
    const formKey = document.getElementById('expensesForm').getAttribute('key');
    const expense = {
      currency: data.get('currency'),
      description: data.get('description'),
      method: data.get('method'),
      tag: data.get('tag'),
      value: data.get('value'),
    };

    if (submitButton.innerText === 'Editar despesa') {
      const expensesForm = document.getElementById('expensesForm');
      submitButton.innerText = 'Adicionar despesa';
      document.getElementById('valueInput').value = '';
      document.getElementById('currency').value = 'USD';
      document.getElementById('descriptionInput').value = '';
      document.getElementById('paymentMethod').value = 'Dinheiro';
      document.getElementById('tagInput').value = 'Alimentação';

      expensesForm.style.backgroundColor = 'white';
      expensesForm.style.color = 'black';
      expensesForm.removeAttribute('key');

      return dispatch(fixExpense({ ...expense, id: parseInt(formKey, 10) }));
    } return dispatch(sendExpense({ ...expense, id: formKey }));
  };

  return <FormInput handleFormSubmit={ handleFormSubmit } />;
}
