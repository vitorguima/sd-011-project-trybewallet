import { HANDLE_EXPENSE_FORM_INPUTS, INCREASE_ID } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const form = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HANDLE_EXPENSE_FORM_INPUTS:
    return {
      ...state,
      [action.name]: action.value,
    };
  case INCREASE_ID:
    return {
      ...state,
      id: state.id + 1,
    };
  default:
    return state;
  }
};

export default form;
