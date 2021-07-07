const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (payload) => ({
  type: SEND_EMAIL,
  payload,
});

export default SEND_EMAIL;
