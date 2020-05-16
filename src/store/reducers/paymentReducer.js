const initialState = {
  payment : "",
  operator : "",
};

export default function paymentReducer(paymentState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PAYMENT":
      return {
        ...paymentState,
        payment: action.payload.target.name,
        operator: action.payload.target.value,
      };
    default:
      return paymentState;
  }
}
