// Coloque aqui suas actions
function SendEmail(state) {
  return {
    type: 'ADD_EMAIL',
    email: state,
  };
}

export default SendEmail;
