export default function saveEmail(email) {
  return ({
    type: 'SAVE_EMAIL',
    email,
  });
}
