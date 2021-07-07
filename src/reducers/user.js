const INITIAL_STATE = {
  name: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return state;
  default:
    return state;
  }
};

export default user;
