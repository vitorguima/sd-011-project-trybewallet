// Coloque aqui suas actions
export const sendEmail = (email) => ({
  type: 'SEND_EMAIL',
  email,
});

export default { sendEmail };
