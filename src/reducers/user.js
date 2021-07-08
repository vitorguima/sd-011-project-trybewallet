// Esse reducer será responsável por tratar as informações da pessoa usuária
INITIAL_STATE = {
  user: { email: '' },
};

const user =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case /* action name */:
      return {

      };

      default:
        return state;
  }
}

export default wallet;