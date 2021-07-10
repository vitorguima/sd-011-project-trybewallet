// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_STATE = {
  id: 0,
  user: '',
  psw: '',
  btnEnable: true,
};

function functionUser(state = USER_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default functionUser;
