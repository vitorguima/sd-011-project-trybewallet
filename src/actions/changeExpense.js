import { CHANGE_EXPENSE } from '../reducers/wallet';

function changeExpense(id, object) {
  return {
    type: CHANGE_EXPENSE,
    id,
    payload: object,
  };
}

export default changeExpense;
