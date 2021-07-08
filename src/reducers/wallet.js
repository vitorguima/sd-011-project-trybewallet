export default (
  INNITIAL_STATE = [{
    description: 'market bill',
    price: 120,
    currency: 'USD',
    tag: 'Food',
    payment_method: 'cash',
  }], action,
) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return [...INNITIAL_STATE, {
      description: 'cine tickets',
      price: 33,
      currency: 'USD',
      tag: 'Leisure',
      payment_method: 'credit card',
    }];
  default:
    return INNITIAL_STATE;
  }
};
