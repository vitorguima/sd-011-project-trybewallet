// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function updateUser(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
