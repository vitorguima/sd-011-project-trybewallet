import { SEND_EMAIL } from '.';

const sendEmailAction = (email) => ({
  type: SEND_EMAIL,
  payload: {
    email,
  },
});

export default sendEmailAction;
