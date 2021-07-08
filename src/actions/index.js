export const SAVE_EMAIL_USER = 'SAVE_EMAIL_USER';

const saveEmailUser = (payload) => ({
  type: SAVE_EMAIL_USER,
  payload,
});

export default saveEmailUser;
