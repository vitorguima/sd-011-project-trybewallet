const LOGIN_ENTER_CLICK_ACTION = 'LOGIN_ENTER_CLICK_ACTION';

function loginEnterClickAction(payload) {
  return {
    type: LOGIN_ENTER_CLICK_ACTION,
    payload,
  };
}

export {
  loginEnterClickAction,
  LOGIN_ENTER_CLICK_ACTION,
};
