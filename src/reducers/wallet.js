import { SPENDING } from '../actions';

const INITIAL_STATE = {
  spendList: 0,
};

const spendingReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SPENDING:
    return {
      spendList: action.value,
    };
  default:
    return state;
  }
};

export default spendingReduce;
