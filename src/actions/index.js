const SAVE_EMAIL = 'SAVE_EMAIL';

const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

const actionFunctions = {
  saveEmailAction,
};
export default actionFunctions;
