const initialState = {
  payment : "",
  operator : "",
  cartDetail : [],
  cartResume : [],
  cartHistory : [],
  trans_id : ""
};

export default function paymentReducer(paymentState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_SORT":
      return {
        ...paymentState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHANGE_INPUT_PAYMENT":
      return {
        ...paymentState,
        payment: action.payload.target.name,
        operator: action.payload.target.value,
      };
      case "SUCCESS_ADD_TO_CART":
      return {
        ...paymentState,
      };
      case "SUCCESS_GET_CART_DETAIL":
      return {
        ...paymentState,
        cartDetail : action.payload
      };
      case "SUCCESS_GET_CART":
      return {
        ...paymentState,
        cartResume : action.payload,
        deleted : false
      };
      case "SUCCESS_GET_CART_HISTORY":
      return {
        ...paymentState,
        cartHistory : action.payload
      };case "SUCCESS_PUT_PAYMENT":
      return {
        ...paymentState,
      };
      case "SUCCESS_CHECKOUT":
      return {
        ...paymentState,
      };
      case "SUCCESS_DELETE_DETAIL":
      return {
        ...paymentState,
        deleted : true
      };
      case "SUCCESS_DELETE_CART":
      return {
        ...paymentState,
      };
      case "CHANGE_INPUT_DELETE":
      return {
        ...paymentState,
        trans_id: action.payload.target.value,
      };
    default:
      return paymentState;
  }
}
