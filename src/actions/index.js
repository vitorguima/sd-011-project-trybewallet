// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FAILURE = 'DATA_FAILURE';
export const GET_DATA = 'GET_DATA';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const sendInfo = (payload) => ({ type: USER_INFO, payload });

export const requestData = () => ({ type: REQUEST_DATA });

export const getData = (payload) => ({ type: GET_DATA, payload });

export const dataFailure = (payload) => ({ type: DATA_FAILURE, payload });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
