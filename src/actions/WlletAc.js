function sendWallet(valorTotal) {
  return {
    type: 'Wallet',
    valorTotal,
  };
}

export default sendWallet;
