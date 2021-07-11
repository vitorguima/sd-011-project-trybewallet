import React from 'react';
import { useDispatch } from 'react-redux';
import { sendExpense } from '../services/API';
import FormInput from './FormInput';

export default function ExpenseForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = new FormData(target);
    const expense = {
      currency: data.get('currency'),
      description: data.get('description'),
      method: data.get('method'),
      tag: data.get('tag'),
      value: data.get('value'),
    };
    dispatch(sendExpense(expense));
  };

  return <FormInput handleFormSubmit={ handleFormSubmit } />;
}
