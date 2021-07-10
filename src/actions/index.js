const KEEP_EMAIL = 'KEEP_EMAIL';

const keepEmail = (email) => (
  {
    type: KEEP_EMAIL,
    email,
  }
);

export default keepEmail;
