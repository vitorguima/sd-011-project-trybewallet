const SEND_EMAIL = 'SEND_EMAIL';

const sendEmail = (payload) => ({
  type: SEND_EMAIL,
  payload,
});

export default sendEmail;
