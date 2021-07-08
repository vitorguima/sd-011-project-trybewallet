// Coloque aqui suas actions
// src/actions/index.js
export const UserLogin = (value) => ({ type: 'EMAIL', email: value });
export const Currencies = (value) => ({ type: 'CURRENCIES', currencies: value });
export const Expenses = (value) => ({ type: 'EXPENSES', expenses: value });
export const Total = (value) => ({ type: 'TOTAL', total: value });
